import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'date-displayer',
  templateUrl: './date-displayer.component.html',
  styleUrls: ['./date-displayer.component.css']
})
export class DateDisplayerComponent implements OnInit {

  @Input() unixTime: number

  date: string = ""

  constructor() { }

  ngOnInit(): void {
    let time = new Date(this.unixTime)

    this.date += this.numberToDay(time.getDay()) + ", " + this.numberToMonth(time.getMonth()) + " " + time.getDate()
  }

  numberToDay(day: number): string {
    let strDay: string = ""
    switch(day) {
      case 0:
        strDay = "Sunday"
        break
      case 1:
        strDay = "Monday"
        break
      case 2:
        strDay = "Tuesday"
        break
      case 3:
        strDay = "Wednesday"
        break
      case 4:
        strDay = "Thursday"
        break
      case 5:
        strDay = "Friday"
        break
      case 6:
        strDay = "Saturday"
        break
      default:
        strDay = "Error invalid day given"
        break
    }

    return strDay
  } 

  numberToMonth(month: number): string {
    let strMonth: string = ""
    switch(month) {
      case 0:
        strMonth = "January"
        break
      case 1:
        strMonth = "February"
        break
      case 2:
        strMonth = "March"
        break
      case 3:
        strMonth = "April"
        break
      case 4:
        strMonth = "May"
        break
      case 5:
        strMonth = "June"
        break
      case 6:
        strMonth = "July"
        break
      case 7:
        strMonth = "August"
        break
      case 8:
        strMonth = "September"
        break
      case 9:
        strMonth = "October"
        break
      case 10:
        strMonth = "November"
        break
      case 11:
        strMonth = "December"
        break
      default:
        strMonth = "Error invalid day given"
        break
    }

    return strMonth
  } 

}
