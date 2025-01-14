import { Routes } from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {InserCarComponent} from "./components/inser-car/inser-car.component";

export const routes: Routes = [

  {path : 'cars' , component : CardComponent},
  {path : 'add' , component : InserCarComponent}
];
