import {provideRouter, Routes} from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {InserCarComponent} from "./components/inser-car/inser-car.component";
import {ReportComponent} from "./components/report/report.component";
import {QrReaderComponent} from "./components/qr-reader/qr-reader.component";
import {MotoCardComponent} from "./components/moto-card/moto-card.component";
import {UpdateComponent} from "./components/update/update.component";
import {CarCardComponent} from "./components/car-card/car-card.component";
import {UsersComponent} from "./components/user/users/users.component";
import {InsertUserComponent} from "./components/user/insert-user/insert-user.component";
import {UpdateUserComponent} from "./components/user/update-user/update-user.component";
import {authGuard} from "./guard/auth.guard";
import {LoginComponent} from "./components/login/login.component";

export const routes: Routes = [


  {path: 'login', component: LoginComponent},

  {path: 'users', component: UsersComponent, canActivate: [authGuard]},
  {path: 'add-user', component: InsertUserComponent, canActivate: [authGuard]},
  {path: 'update-user/:id', component: UpdateUserComponent, canActivate: [authGuard]},

  {path: 'reports', component: ReportComponent, canActivate: [authGuard]},

  {path: 'cars', component: CardComponent, canActivate: [authGuard]},
  {path: 'add', component: InserCarComponent, canActivate: [authGuard]},
  {path: 'update/:id', component: UpdateComponent, canActivate: [authGuard]},

  {path: 'moto/:id', component: MotoCardComponent, canActivate: [authGuard]},
  {path: 'car/:id', component: CarCardComponent, canActivate: [authGuard]},

  {path: 'qr-reader', component: QrReaderComponent, canActivate: [authGuard]},

  {path: '**', redirectTo: 'login'},

];
export const appRouterProviders = [provideRouter(routes)];
