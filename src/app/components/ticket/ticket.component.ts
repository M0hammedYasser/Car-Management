import {Component, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit{

  cars: Car[] = [];

  constructor(private service: CarService) {
  }

  ngOnInit() {
    this.service.findAll().subscribe(res => this.cars = res);
  }


  printImage(imageElement: HTMLImageElement): void {
    // Create a new window
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Print Image</title>
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
          <img src="${imageElement.src}" alt="Print Image">
        </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  }
}
