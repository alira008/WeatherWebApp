import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UnitsService } from '../../services/units.service';
import { GeocoderService } from '../../services/geocoder.service';
import { WeatherService } from '../../services/weather.service';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { fromEvent } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-displayer',
  templateUrl: './nav-displayer.component.html',
  styleUrls: ['./nav-displayer.component.css']
})
export class NavDisplayerComponent implements OnInit {

  @ViewChild('cityLookupInput', { static: true }) cityLookupInput: ElementRef;
  
  locations: any
  city: string
  state: string
  country: string
  lat: string
  lon: string
  chosenLocation: string
  showLocations: boolean = false
  currentUrl: string

  constructor(
    public geocoderService: GeocoderService,
    public unitsService: UnitsService,
    private weatherService: WeatherService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.outputLocationSuggestions()
    this.openCloseDropMenu()
    this.currentUrl = this.router.url
  }

  outputLocationSuggestions() {
    //  Event from city look up input field
    fromEvent(this.cityLookupInput.nativeElement, 'input')
    .pipe(
      map((event: any) => {
        return event.target.value;
      }),
      // if character length greater than 1
      filter(res => res.length > 1),

      // Time in milliseconds between key events
      debounceTime(500),

      // If previous query is diffent from current   
      distinctUntilChanged()
    ).subscribe((text: string) => {
      this.geocoderService.getResults(text)
        .subscribe((res) => {
          console.log(res)
          this.locations = res
        })
    });
  }

  getChosenLocationInfo(index: number) {
    console.log(this.locations[index])
    this.lat = this.locations[index].lat
    this.lon = this.locations[index].lon
    this.city = this.locations[index].address.city
    this.state = this.locations[index].address.state
    this.country = this.locations[index].address.country
    this.saveDataInLocalStorage()
  }

  saveDataInLocalStorage() {
    localStorage.setItem("lat", this.lat)
    localStorage.setItem("lon", this.lon)
    localStorage.setItem("city", this.city)
    localStorage.setItem("country", this.country)
  }

  openCloseDropMenu() {
    fromEvent(document, 'click')
    .pipe(
      map((event: any) => {
        return event.target
      })
    )
    .subscribe(
      (element) => {
        if(element != this.cityLookupInput.nativeElement && this.showLocations)
          this.showLocations = false
        else if(element === this.cityLookupInput.nativeElement && !this.showLocations)
          this.showLocations = true
      }
    )
  }

}
