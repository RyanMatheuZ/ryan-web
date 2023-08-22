import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'technologyNameFormatter'
})

export class TechnologyNameFormatterPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase().replace(/-/g, ' ');
  }
}
