
/**
 * Forms the basis for the class
 * 
 * the html is also shared.
 * 
 * {@link https://stackoverflow.com/questions/40009149/creating-custom-form-controls-in-angular-2}
 * 
 *  {@link http://plnkr.co/edit/69SGnjYGBWhC4tEezc1G?p=preview}
 */
import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FunctionsService } from './services/functions.service';

@Component({
  selector: 'material2-country-select',
  template: `
  <mat-form-field  class="{{class}}">
  <mat-select [(ngModel)]="selectValue" placeholder="{{placeholder}}" ngDefaultControl>
      <mat-option *ngFor="let country of countries" [value]="country.code">
          {{country.country}}
      </mat-option>
  </mat-select>
</mat-form-field>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Material2CountrySelectComponent),
      multi: true,
    },
    FunctionsService
  ],
})
export class Material2CountrySelectComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string = 'Country';
  @Input() startCountries: Array<any> = [];
  @Input() limitCountries: Array<any> = [];
  @Input() lang: string = 'en';
  @Input() noValue: boolean = true;
  @Input() initNoValue: string = 'Select Country';
  private _selectValue: any = '';
  private _onTouchedCallback: () => {};
  private _onChangeCallback: (_: any) => {};
  _inputValue;
  hasValue;
  countries: Array<any>;


  constructor(private functionService: FunctionsService) { }

  ngOnInit() {
    this.getCountries();
  }


  getCountries() {
    let isoCountry = this.functionService.getList(this.lang);
    let arr = [];

    if (this.noValue) arr.push({ code: '', country: this.initNoValue });

    //init county
    this.startCountries.forEach((code, index) => arr.push({ code, country: isoCountry[code] }));

    Object.keys(isoCountry).forEach((key) => {
      // console.log(key,isoCountry[key]);

      if (this.limitCountries.length) {
        if (this.limitCountries.indexOf(key) !== -1) {
          arr.push({ code: key, country: isoCountry[key] });
        }
      } else {
        arr.push({ code: key, country: isoCountry[key] })
      }

    });
    this.countries = arr;
  }

  get selectValue(): any {
    return this._selectValue;
  }
  
  set selectValue(value: any) {
    if (value !== this._selectValue) {
      this._inputValue = value;
      this._selectValue = value;
      this._onChangeCallback(value);
    }

    this.hasValue = (value != null && value.length > 0)

    this._onTouchedCallback();

  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    this._selectValue = value;
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }
}
