import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as config from '../../../assets/config.json'

@Injectable({
  providedIn: 'root'
})
export class GeocoderService {
  private accessToken = config['Geocoder-API-Key']
  private url = "https://api.locationiq.com/v1/autocomplete.php?key="
  private options = "&limit=5&addressdetails=1&tag=place%3Acity&dedup=1"

  constructor(private http: HttpClient) { }

  getResults(query: string) {
    let requestUrl = this.url + this.accessToken + "&q=" + query + this.options
    // console.log(requestUrl)
    return this.http.get(requestUrl)
  }
}
