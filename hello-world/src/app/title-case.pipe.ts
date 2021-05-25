import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null

    let words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      let word = words[i]
      if (i > 0 && this.isPreposistion(word)) {
        words[i] = _.lowerCase(words[i]);
      } else {
        words[i] = this.toTitleCase(word);
      }
    }

    return words.join(" ");
  }

  private toLowerCase(word: string): string {
    return _.lowerCase(word)
  }

  private toTitleCase(word: string): string {
    return _.capitalize(word)
  }

  private isPreposistion(word: string): boolean {
    let prepositisons = [
      'of',
      'the'
    ]

    return prepositisons.includes(_.lowerCase(word))
  }

}
