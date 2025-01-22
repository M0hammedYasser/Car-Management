import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {NgForOf} from "@angular/common";
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";
import {ActivatedRoute} from "@angular/router";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-moto-card',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './moto-card.component.html',
  styleUrl: './moto-card.component.css'
})
export class MotoCardComponent implements OnInit{

  car: Car = {} as Car;
  id : number = 0;
  protected readonly environment = environment;

  constructor(private service: CarService , private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.findByID(this.id).subscribe(res => this.car = res);
  }

  printCard(cardElement: HTMLElement | null): void {
    if (!cardElement) {
      console.error('Card element not found');
      return;
    }
    const printButton = cardElement.querySelector('.print-btn') as HTMLElement;
    if (printButton) {
      printButton.style.display = 'none';
    }
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

    Promise.all(promises)
      .then(() => {
        html2canvas(cardElement, { useCORS: true, allowTaint: true }).then((canvas) => {
          const imageData = canvas.toDataURL('image/png');
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
            setTimeout(() => {
              printWindow.focus();
              printWindow.print();
              printWindow.close();
            }, 500);
          }
        }).catch((error) => {
          console.error('Error generating print image:', error);
          if (printButton) {
            printButton.style.display = 'block';
          }
        });
      })
      .catch((error) => {
        console.error('Images not loaded:', error);
        if (printButton) {
          printButton.style.display = 'block';
        }
      });
  }

}
