import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDToEGP'
})
export class USDPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value:number , rate:number=15): number {
    return value * rate;
  }

}
