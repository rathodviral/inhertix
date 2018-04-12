import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAlphabatically'
})
export class SortAlphabaticallyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
