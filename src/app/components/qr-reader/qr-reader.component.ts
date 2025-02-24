import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
export class QrReaderComponent implements AfterViewInit {

  @ViewChild('qrInput', {static: false}) qrInput!: ElementRef<HTMLInputElement>;
  private debounceTimer: any;

  constructor(private qrService:QRService) {
  }

  ngAfterViewInit(): void {
    this.focusInput();
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = setTimeout(() => {
      const scannedValue = inputElement.value.trim();
      if (scannedValue) {
        this.qrService.scan(scannedValue).subscribe();
        inputElement.value = '';
        this.focusInput();
      }
    }, 300);
  }

  private focusInput(): void {
    if (this.qrInput) {
      this.qrInput.nativeElement.focus();
    }
  }
}
