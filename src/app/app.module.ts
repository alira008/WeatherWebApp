import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HourlyWeatherComponent } from './modules/API-Handling/hourly-weather/hourly-weather.component';
import { WeatherService } from './shared/services/weather.service';
import { WindDisplayerComponent } from './shared/components/wind-displayer/wind-displayer.component';
import { TimeDisplayerComponent } from './shared/components/time-displayer/time-displayer.component';
import { TempDisplayerComponent } from './shared/components/temp-displayer/temp-displayer.component';
import { WeatherDescriptionDisplayerComponent } from './shared/components/weather-description-displayer/weather-description-displayer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TriHourlyWeatherPageComponent } from './pages/tri-hourly-weather-page/tri-hourly-weather-page.component';
import { CurrentWeatherPageComponent } from './pages/current-weather-page/current-weather-page.component';
import { PrevWeatherPageComponent } from './pages/prev-weather-page/prev-weather-page.component';
import { DateDisplayerComponent } from './shared/components/date-displayer/date-displayer.component';
import { NavDisplayerComponent } from './shared/components/nav-displayer/nav-displayer.component'

@NgModule({
  declarations: [
    AppComponent,
    HourlyWeatherComponent,
    WindDisplayerComponent,
    TimeDisplayerComponent,
    TempDisplayerComponent,
    WeatherDescriptionDisplayerComponent,
    HomePageComponent,
    TriHourlyWeatherPageComponent,
    CurrentWeatherPageComponent,
    PrevWeatherPageComponent,
    DateDisplayerComponent,
    NavDisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
