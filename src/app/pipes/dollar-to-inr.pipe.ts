import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ceil'
})
export class DollarsToInrPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    let price  = Math.ceil(value)
    return price;
  }

}
