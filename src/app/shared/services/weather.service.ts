import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { UnitsService } from './units.service'
import * as config from '../../../assets/config.json'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private hourly_API_url = config['Weather-API-Url-Hourly-Weather']
  private current_API_url = config['Weather-API-Url-Current-Weather']
  private previous_days_API_url = config['Weather-API-Url-Previous-5-Days']
  private API_key = config['Weather-API-Key']
  private API_host = config['Weather-API-Host']
  private lat: string
  private lon: string
  private city: string
  private country: string

  constructor(private http: HttpClient, private unitsService: UnitsService) { }

  getCoordsFromDB() {
    if(localStorage.getItem("lat") == null || localStorage.getItem("lon") == null 
        || localStorage.getItem("city") == null || localStorage.getItem("country") == null) {
      localStorage.setItem("lat", "37.77")
      localStorage.setItem("lon", "-122.42")
    }
    this.lat = localStorage.getItem("lat")
    this.lon = localStorage.getItem("lon")
    this.city = localStorage.getItem("city")
    this.country = localStorage.getItem("country")
  }

  displayCoords() {
    console.log("lat: " + this.lat + " lon: " + this.lon)
  }

  getCurrent() {
    this.getCoordsFromDB()
    const options = {
      headers: {
        'x-rapidapi-key': this.API_key,
        'x-rapidapi-host': this.API_host
      },
      params: {
        q: this.city + ", " + this.country,
        lat: this.lat,
        lon: this.lon,
        units: this.unitsService.getUnit()
      }
    }
    // console.log(options)
    return this.http.get(this.current_API_url, options)
  }

  getHourly() {
    this.getCoordsFromDB()
    const options = {
      headers: {
        'x-rapidapi-key': this.API_key,
        'x-rapidapi-host': this.API_host
      },
      params: {
        q: this.city + ", " + this.country,
        lat: this.lat,
        lon: this.lon,
        units: this.unitsService.getUnit()
      }
    }
    return this.http.get(this.hourly_API_url, options)
  }

  getPrevious() {
    this.getCoordsFromDB()
    const options = {
      headers: {
        'x-rapidapi-key': this.API_key,
        'x-rapidapi-host': this.API_host
      },
      params: {
        lat: this.lat,
        lon: this.lon,
        dt: Math.floor(Date.now()/1000-3600).toString()
      }
    }
    return this.http.get(this.previous_days_API_url, options)
  }
}
