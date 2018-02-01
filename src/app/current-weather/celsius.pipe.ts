import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(temperature: number): string {
    return `${ Math.round(temperature) } \xB0C`;
  }

}
