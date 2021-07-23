import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/services/weather.service'
import { UnitsService } from '../../shared/services/units.service';

@Component({
  selector: 'app-tri-hourly-weather-page',
  templateUrl: './tri-hourly-weather-page.component.html',
  styleUrls: ['./tri-hourly-weather-page.component.css']
})
export class TriHourlyWeatherPageComponent implements OnInit {
  unit: string
  hourlyWeathers: any[]
  cityInfo: any

  constructor(
    private service: WeatherService,
    private unitsService: UnitsService
  ) { }

  ngOnInit(): void {
    //  Get units for weather to be displayed
    this.unit = this.unitsService.getUnit()

    //  Get weather data to be displayed
    this.service.getHourly()
      .subscribe(response => {
        // console.log(response)
        this.hourlyWeathers = response['list']
        this.cityInfo = response['city']
      });
  }

  isNewDay(index: number): boolean {
    let currentDate = new Date(this.hourlyWeathers[index].dt * 1000)
    if(index === 0) {  
      return true
    }
    let prevDate = new Date(this.hourlyWeathers[index-1].dt * 1000)
    if(prevDate.getDate() === currentDate.getDate())
        return false

    return true
  }

}
