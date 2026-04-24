import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  apiKey: string = 'd70d45b86d00eb8d88530de26b27d122';
  URI: string = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q`;

  constructor(private http: HttpClient) {}

  getWeather(city: string, country:string){
    console.log(`Obteniendo clima para ${city}, ${country}`);
    return this.http.get(`${this.URI}${city},${country}`);
  }
}
