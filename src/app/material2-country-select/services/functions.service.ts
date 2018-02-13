import { Injectable } from '@angular/core';

import { countriesEn } from './../langs/en';
import { countriesFr } from './../langs/fr';

@Injectable()
export class FunctionsService {

  private langAccepted = ['en','fr'];
  
  constructor() { }

  /**
   * 
   * @param countryCode 2 letter string
   * @param lang Optional 2 letter string defaults to 'en'
   */
  getName(countryCode: string = '', lang: string = 'en'): string {
    lang = this.getLanguage(lang);
    return (countryCode) ? this.getList(lang)[countryCode.toUpperCase()] : '';
  }
  

  /**
   * 
   * @param lang Optional 2 letter string defaults to 'en'
   */
  getList(lang: string = 'en'):Object {
    
    switch (lang.toLocaleLowerCase()) {
      case 'fr':
        return countriesFr.countries;
      default:
        return countriesEn.countries;
    }
  }  
  
  /**
   * Check to see if language is one of our accepted values
   * 
   * Otherwise returns en for english.
   * 
   * @param lang Optional 2 letter string defaults to 'en'
   */
  private getLanguage(lang: string = 'en'): string {
    return (this.langAccepted.indexOf(lang) === -1) ? 'en' : lang;
  }
}
