import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'additionPipe'
})
export class AdditionPipePipe implements PipeTransform {

  transform(num1: number,num2: number ): unknown {
    return num1+num2;
  }

}
