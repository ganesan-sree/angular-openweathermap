import { Pipe, PipeTransform } from '@angular/core';
import { config } from '../config';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {

  transform(value: string): string {
    return value ? config.iconUrl.replace('{i}', value) : config.iconUrl.replace('{i}', '01d');
  }

}
