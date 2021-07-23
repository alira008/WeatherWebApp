import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  private unit = 'imperial'

  constructor() { }

  getUnit() {
    if(localStorage.getItem("unit") != null) {
      this.unit = localStorage.getItem("unit")
    }
    return this.unit
  }

  getUnitAbbrev() {
    if(localStorage.getItem("unit") != null) {
      this.unit = localStorage.getItem("unit")
    }
    if(this.unit === 'imperial')
      return 'F'
    return 'C'
  }

  changeUnit(newUnit: string){
    if(newUnit != this.unit){
      this.unit = newUnit
      localStorage.setItem("unit", newUnit)
    }
  }

}
