import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMilleToKm',
})
export class ConvertMilleToKmPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): number {
    if (!value) {
      return 0;
    }
    return parseInt(value) * 1.60934;
  }
}
