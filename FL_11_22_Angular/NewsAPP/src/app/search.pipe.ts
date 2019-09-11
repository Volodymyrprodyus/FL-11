import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(news, value): string {
    let result = news.filter(res => {
      return res.category.includes(value)
    }); 
    console.log('pipe search', result)
    return result 
  }
}
