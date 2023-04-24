import { Component, Renderer2 } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-pane',
  templateUrl: './weather-pane.component.html',
  styleUrls: ['./weather-pane.component.scss']
})
export class WeatherPaneComponent {

  city!: string;
  weather: any;
  
  constructor(private weatherService: WeatherService) {}

  getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe(data => {
      this.weather = data;
    });
  }
}
