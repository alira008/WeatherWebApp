import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/services/weather.service';
import { UnitsService } from '../../shared/services/units.service';

@Component({
  selector: 'app-current-weather-page',
  templateUrl: './current-weather-page.component.html',
  styleUrls: ['./current-weather-page.component.css']
})
export class CurrentWeatherPageComponent implements OnInit {
  unit: string
  city: string
  cityInfo: any
  windInfo: any
  tempInfo: any
  weatherInfo: any
  fa_class = 'fas'
  fa_icon = 'fa-sun'

  constructor(
    private weatherService: WeatherService,
    private unitsService: UnitsService
  ) { }

  ngOnInit(): void {
    //  Get units for weather to be displayed
    this.unit = this.unitsService.getUnit()

    //  Get weather data to be displayed
    this.weatherService.getCurrent()
      .subscribe(response => {
        // console.log(response)
        this.city = response['name']
        this.cityInfo = response['sys']
        this.weatherInfo = response['weather']
        this.tempInfo = response['main']
        this.windInfo = response['wind']
        this.roundTempInfo()
        this.weather_icon_selector()
      });
    
  }

  roundTempInfo(): void {
    this.tempInfo.temp = Math.round(this.tempInfo.temp)
    this.tempInfo.feels_like = Math.round(this.tempInfo.feels_like)
    this.tempInfo.temp_min = Math.round(this.tempInfo.temp_min)
    this.tempInfo.temp_max = Math.round(this.tempInfo.temp_max)
  }

  weather_icon_selector() {
    if(this.weatherInfo.main == "Clouds") {
      this.fa_icon = 'fa-cloud-sun'
    }
    else if(this.weatherInfo.main == "Clear") {
      this.fa_icon = 'fa-sun'
    }
    else if(this.weatherInfo.main == "Rain"){
      this.fa_icon = 'fa-cloud-rain'
    }
  }
}
