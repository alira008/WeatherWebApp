import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wind-displayer',
  templateUrl: './wind-displayer.component.html',
  styleUrls: ['./wind-displayer.component.css']
})
export class WindDisplayerComponent implements OnInit {

  @Input() direction: number
  @Input() speed: number
  @Input() units?: string = "imperial"

  windDirection: string
  windSpeed: number
  speedUnit: string

  constructor() { }

  ngOnInit(): void {
    this.toCompassDirections()
    this.windSpeed = Math.round(this.speed)

    if(this.units == "imperial")
      this.speedUnit = "mph"
    else if(this.units == "metric")
      this.speedUnit = "km/h"
  }

  toCompassDirections() {
    if(this.direction > 2 && this.direction < 88) this.windDirection="NE"
    if(this.direction > 92 && this.direction < 178) this.windDirection="SE"
    if(this.direction > 182 && this.direction < 268) this.windDirection="SW"
    if(this.direction > 272 && this.direction < 358) this.windDirection="NW"
    if(this.direction >= 88 && this.direction <= 92) this.windDirection="E"
    if(this.direction >= 178 && this.direction <= 182) this.windDirection="S" 
    if(this.direction >= 268 && this.direction <= 272) this.windDirection="W" 
    if(this.direction >= 358 || this.direction <= 2) this.windDirection="N" 
  }
}
