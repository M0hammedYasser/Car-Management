import {Routes} from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {InserCarComponent} from "./components/inser-car/inser-car.component";
import {ReportComponent} from "./components/report/report.component";
import {TicketComponent} from "./components/ticket/ticket.component";
import {QrReaderComponent} from "./components/qr-reader/qr-reader.component";

export const routes: Routes = [

  {path: 'cars', component: CardComponent},
  {path: 'add', component: InserCarComponent},
  {path: '', component: ReportComponent},
  {path: 'reports', component: ReportComponent},
  {path: 'ticket', component: TicketComponent},
  {path: 'qr-reader', component: QrReaderComponent}
];
