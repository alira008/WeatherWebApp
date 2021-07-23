import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-description-displayer',
  templateUrl: './weather-description-displayer.component.html',
  styleUrls: ['./weather-description-displayer.component.css']
})
export class WeatherDescriptionDisplayerComponent implements OnInit {

  @Input() unix_time: number
  @Input() weather: string
  @Input() description: string

  fa_class = 'fas'
  fa_icon = 'fa-cloud-moon'

  constructor() { }

  ngOnInit(): void {
    this.weather_icon_selector()
  }

  time_of_day() {
    let time = new Date(this.unix_time)
    let hours = time.getHours()

    if(hours > 24)
      return "error"
    
    if((hours >= 0 && hours < 6) || (hours > 18 && hours < 24))
      return "night"
    
    return "day"
  }

  weather_icon_selector() {
    if(this.weather == "Clouds") {
      if(this.time_of_day() == "day")
        this.fa_icon = 'fa-cloud-sun'
      else if(this.time_of_day() == "night")
        this.fa_icon = 'fa-cloud-moon'
    }
    else if(this.weather == "Clear") {
      if(this.time_of_day() == "day")
        this.fa_icon = 'fa-sun'
      else if(this.time_of_day() == "night")
        this.fa_icon = 'fa-moon'
    }
    else if(this.weather == "Rain")
      if(this.time_of_day() == "day")
        this.fa_icon = 'fa-cloud-sun-rain'
      else if(this.time_of_day() == "night")
        this.fa_icon = 'fa-cloud-moon-rain'
  }

}
