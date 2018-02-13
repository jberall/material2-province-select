This is an Angular 5 Country DropDown List and FunctionsService.
    
Currently supports english and french.

This module will render a material2 select with a list of countries.
It is designed to work with Reactive Forms
To use:
import { Material2CountrySelectModule } from '..'
@NgModule({
  imports: [
    CommonModule,
    ...
    Material2CountrySelectModule
  ],
  providers: [..],
  declarations: [..]
})

It requires a formControlName.
Options:
    placeholder defaults to 'Country'
    [startCountries] defaults to empty array.  Just add ISO 2 digit country code to have the start.
    [limitCountries] defaults to empty array.  Just add ISO 2 digit country code to limit countries.
        example [startCountries]="['CA','US'] will only display Canada and the Unites States.
    lang defaults to en (currently supports english(en) and french(fr))
    [noValue] defaults to true.  If false No Value does not appear.
    initNoValue defaults to No Value.
    
<material2-country-select  
    formControlName="country_id" 
        placeholder="some country" 
        [startCountries]="['CA','US']" 
        [limitCountries]="[]" 
        lang="en" 
        initNoValue="some no value" 
        [noValue]="false"
        ></material2-country-select>
        
The FunctionsService has 2 functions:
 /**
   * 
   * @param countryCode 2 letter string
   * @param lang Optional 2 letter string defaults to 'en'
   */
  getName(countryCode: string = '', lang: string = 'en'): string
  
  /**
   * 
   * @param lang Optional 2 letter string defaults to 'en'
   */
  getList(lang: string = 'en'):Object