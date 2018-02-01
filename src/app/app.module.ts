import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { CelsiusPipe } from './current-weather/celsius.pipe';
import { PercentPipe } from './current-weather/percent.pipe';
import { WeatherIconPipe } from './current-weather/weather-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    CelsiusPipe,
    PercentPipe,
    WeatherIconPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
