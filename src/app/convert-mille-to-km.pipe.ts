import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMilleToKm',
})
export class ConvertMilleToKmPipe implements PipeTransform {
  transform(value: any, target: string): number {
    if (!value) {
      return 0;
    }
    switch (target) {
      case 'km':
        return parseInt(value) * 1.60934;
      case 'm':
        return parseInt(value) * 1.60934 * 1000;
      case 'cm':
        return parseInt(value) * 1.60934 * 1000 * 100;
      default:
        throw new Error('Please put a valid unit of mesure');
    }
  }
}
