import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../../shared/services/weather.service'

@Component({
  selector: 'hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.css']
})
export class HourlyWeatherComponent implements OnInit {
  hourlyWeathers: any[]
  cityInfo: any
  
  constructor(private service: WeatherService) { }

  ngOnInit() {
    this.service.getHourly()
      .subscribe(response => {
        this.hourlyWeathers = response['list']
        this.cityInfo = response['city']
      });
  }
}
