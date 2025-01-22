import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BrowserMultiFormatReader} from '@zxing/browser';
import {BrowserCodeReader} from '@zxing/browser';
import {Reader} from "@zxing/library";
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {QRService} from "../../service/qr.service";

@Component({
  selector: 'app-qr-reader',
  standalone: true,
  imports: [
    ZXingScannerModule
  ],
  templateUrl: './qr-reader.component.html',
  styleUrl: './qr-reader.component.css'
})
export class QrReaderComponent {

  constructor(private http: HttpClient , private service : QRService) {}

  onCodeScanned(data: string): void {
    if (data) {
      // console.log('Scanned Data:', data);
    }
  }





}
