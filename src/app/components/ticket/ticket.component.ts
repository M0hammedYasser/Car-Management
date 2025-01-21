import {Component, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";
import {NgForOf} from "@angular/common";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit{

  cars: Car[] = [];

  constructor(private service: CarService) {
  }

  ngOnInit() {
    this.service.findCars().subscribe(res => this.cars = res);
  }

  printImage(cardElement: HTMLElement | null): void {
    if (!cardElement) {
      console.error('Card element not found');
      return;
    }

    // Get the print button
    const printButton = cardElement.querySelector('.print-btn');

    // Hide the print button temporarily
    if (printButton) {
      printButton.classList.add('hidden');
    }

    // Ensure all images are loaded before capturing
    const images = cardElement.querySelectorAll('img');
    const promises = Array.from(images).map((img: HTMLImageElement) => {
      return new Promise<void>((resolve, reject) => {
        if (img.complete) {
          resolve();
        } else {
          img.onload = () => resolve();
          img.onerror = () => reject(new Error('Image failed to load'));
        }
      });
    });

    // Wait for all images to load before calling html2canvas
    Promise.all(promises)
      .then(() => {
        // Use html2canvas to capture the element
        html2canvas(cardElement, { useCORS: true, allowTaint: true }).then((canvas) => {
          // Show the print button again
          if (printButton) {
            printButton.classList.remove('hidden');
          }

          // Convert the canvas to a data URL (image)
          const imageData = canvas.toDataURL('image/png');

          // Create a new window for printing
          const printWindow = window.open('', '_blank');
          if (printWindow) {
            printWindow.document.open();
            printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <title>Print Card</title>
              <style>
                body {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin: 0;
                  height: 100vh;
                }
                img {
                  max-width: 100%;
                  max-height: 100%;
                }
              </style>
            </head>
            <body>
              <img src="${imageData}" alt="Card Image">
            </body>
            </html>
          `);
            printWindow.document.close();

            // Wait for content to be rendered before printing
            setTimeout(() => {
              printWindow.focus();
              printWindow.print();
              printWindow.close();
            }, 500);  // Delay printing to ensure content is visible
          }
        }).catch((error) => {
          console.error('Error generating print image:', error);

          // Restore the button in case of failure
          if (printButton) {
            printButton.classList.remove('hidden');
          }
        });
      })
      .catch((error) => {
        console.error('Images not loaded:', error);

        // Restore the button in case of error
        if (printButton) {
          printButton.classList.remove('hidden');
        }
      });
  }
}
