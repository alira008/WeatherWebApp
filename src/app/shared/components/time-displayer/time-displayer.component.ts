import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'time-displayer',
  templateUrl: './time-displayer.component.html',
  styleUrls: ['./time-displayer.component.css']
})
export class TimeDisplayerComponent implements OnInit {

  @Input() date: number

  hours: string
  minutes: string
  endFormat: string

  constructor() { }

  ngOnInit(): void {
    let time = new Date(this.date)
    this.hours = time.getHours().toString()
    this.minutes = time.getMinutes().toString()
    this.endFormat = "am"

    if(parseInt(this.minutes) < 10)
      this.minutes = '0'.concat(this.minutes)

    if(parseInt(this.hours) >= 12)
      this.endFormat = "pm"

    if(parseInt(this.hours) > 12) {
      let newHours = parseInt(this.hours) - 12
      this.hours = newHours.toString()
    }

    if(this.hours == "0")
      this.hours = "12"
  }

}
