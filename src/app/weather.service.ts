import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://weatherapi-com.p.rapidapi.com/current.json';
  private apiKey = 'a5994299a8msh1ec2036d273e7fap1e6a74jsncd985cfe7c03';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    });
    const params = { q: city };
    return this.http.get<any>(this.apiUrl, { headers, params });
  }
}
