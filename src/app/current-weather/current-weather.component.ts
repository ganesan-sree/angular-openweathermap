import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService, } from './weather.service';
import { config } from '../config';
import { Weather } from './weather';
import { CelsiusPipe } from './celsius.pipe';
import { PercentPipe } from './percent.pipe';
import { WeatherIconPipe } from './weather-icon.pipe';

@Component({
  selector: 'app-current-weather',
  providers: [ WeatherService, CelsiusPipe, WeatherIconPipe ],
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit, OnDestroy {
  timer: any;
  error: any;
  weather: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.loadWeather();
    this.timer = setInterval(() => {
      this.loadWeather();
    }, 20000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  // weather conditions loader function
  loadWeather() {
    this.weatherService.getWeatherbyCity(config.city)
      .subscribe(
        data => this.weather = new Weather(
         data.name,
          data.weather[0].icon,
          data.weather[0].main,
          data.weather[0].description,
          data.clouds.all,
          data.main.temp
        ),
        error => this.error = error
      );
  }
}
