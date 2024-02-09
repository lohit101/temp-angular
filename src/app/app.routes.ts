import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegionsComponent } from './pages/regions/regions.component';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'regions', component: RegionsComponent},
  {path:'**', component: HomeComponent}
];
