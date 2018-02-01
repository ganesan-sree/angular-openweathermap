import { Pipe, PipeTransform } from '@angular/core';
import { config } from '../config';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {

  transform(value: string): string {
    return config.iconUrl.replace('{i}', value);
  }

}
