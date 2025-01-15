import {Routes} from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {InserCarComponent} from "./components/inser-car/inser-car.component";
import {ReportComponent} from "./components/report/report.component";
import {TicketComponent} from "./components/ticket/ticket.component";

export const routes: Routes = [

  {path: 'cars', component: CardComponent},
  {path: 'add', component: InserCarComponent},
  {path: 'reports', component: ReportComponent},
  {path: 'ticket', component: TicketComponent}
];
