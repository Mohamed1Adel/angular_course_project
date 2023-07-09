import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'papa'
})
export class PapaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
