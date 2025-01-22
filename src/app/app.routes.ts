import {Routes} from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {InserCarComponent} from "./components/inser-car/inser-car.component";
import {ReportComponent} from "./components/report/report.component";
import {QrReaderComponent} from "./components/qr-reader/qr-reader.component";
import {MotoCardComponent} from "./components/moto-card/moto-card.component";
import {UpdateComponent} from "./components/update/update.component";
import {CarCardComponent} from "./components/car-card/car-card.component";

export const routes: Routes = [

  {path: 'cars', component: CardComponent},
  {path: 'add', component: InserCarComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: '', component: ReportComponent},
  {path: 'reports', component: ReportComponent},
  {path: 'moto/:id', component: MotoCardComponent},
  {path: 'car/:id', component: CarCardComponent},
  {path: 'qr-reader', component: QrReaderComponent}
];
