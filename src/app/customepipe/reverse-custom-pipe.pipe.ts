import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseCustomPipe'
})
export class ReverseCustomPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('').reverse().join('');
  }

}
