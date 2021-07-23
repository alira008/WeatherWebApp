import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'temp-displayer',
  templateUrl: './temp-displayer.component.html',
  styleUrls: ['./temp-displayer.component.css']
})
export class TempDisplayerComponent implements OnInit {

  @Input() temp: number
  @Input() units?: string

  roundedTemp: number

  constructor() { }

  ngOnInit(): void {
    if(this.temp > 200) { 
      if(this.units === "metric")
        this.temp = this.kelvinToCelsius(this.temp)
      else if(this.units === "imperial")
        this.temp = this.kelvinToF(this.temp)
      else {
        this.temp = NaN;
        console.error("Invalid units given for the temperature.")
      }
    }
    this.roundedTemp = Math.round(this.temp)
  }

  kelvinToCelsius(temperature: number): number {
    return temperature - 273.15
  }

  kelvinToF(temperature: number): number {
    return this.kelvinToCelsius(temperature) * 9.0 / 5.0 + 32
  }

}
