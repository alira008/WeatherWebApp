import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './pages/home-page/home-page.component';
import { CurrentWeatherPageComponent} from './pages/current-weather-page/current-weather-page.component';
import { TriHourlyWeatherPageComponent} from './pages/tri-hourly-weather-page/tri-hourly-weather-page.component';
import { PrevWeatherPageComponent} from './pages/prev-weather-page/prev-weather-page.component';

const routes: Routes = [
  
  { path: '', component: HomePageComponent },
  { path: 'current', component: CurrentWeatherPageComponent },
  { path: 'tri-hour', component: TriHourlyWeatherPageComponent },
  { path: 'prev-weather', component: PrevWeatherPageComponent },
  { path: '**', component: HomePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
