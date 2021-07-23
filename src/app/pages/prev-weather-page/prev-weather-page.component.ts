import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/services/weather.service'
import { UnitsService } from '../../shared/services/units.service';

@Component({
  selector: 'app-prev-weather-page',
  templateUrl: './prev-weather-page.component.html',
  styleUrls: ['./prev-weather-page.component.css']
})
export class PrevWeatherPageComponent implements OnInit {
  unit: string
  hourlyWeathers: any[]
  currentWeather: any
  location: string

  constructor(
    private service: WeatherService,
    private unitsService: UnitsService
  ) { }

  ngOnInit(): void {
    //  Get units for weather to be displayed
    this.unit = this.unitsService.getUnit()
    console.log(Math.floor(Date.now()/1000-3600))
    //  Get weather data to be displayed
    this.service.getPrevious()
      .subscribe(response => {
        // console.log(response)
        this.hourlyWeathers = response['hourly']
        this.currentWeather = response['current']
        let city = response['timezone'].split("/")
        city[1] = city[1].replace("_", " ")
        this.location = city[1] + ", " + city[0]
      });
  }

  isNewDay(index: number): boolean {
    let currentDate = new Date(this.hourlyWeathers[index].dt * 1000)
    if(index === 0) {
      // let prevDate = new Date(this.currentWeather.dt * 1000)
      // if(prevDate.getDate() === currentDate.getDate())
      //   return false
      
      return true
    }
    let prevDate = new Date(this.hourlyWeathers[index-1].dt * 1000)
    if(prevDate.getDate() === currentDate.getDate())
        return false

    return true
  }

}
