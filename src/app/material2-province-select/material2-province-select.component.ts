import { enProvinces } from './data/en-provinces';
/**
 * Forms the basis for the class
 * 
 * the html is also shared.
 * 
 * {@link https://stackoverflow.com/questions/40009149/creating-custom-form-controls-in-angular-2}
 * 
 *  {@link http://plnkr.co/edit/69SGnjYGBWhC4tEezc1G?p=preview}
 */
import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'material2-province-select',
  templateUrl: './material2-province-select.component.html',
  styleUrls: ['./material2-province-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Material2ProvinceSelectComponent),
      multi: true,
    }
  ],  
})
export class Material2ProvinceSelectComponent implements OnInit, OnChanges, ControlValueAccessor {
  
  @Input() placeholder: string = 'Province';
  @Input() lang: string = 'en';
  @Input() noValue: boolean = true; 
  @Input() initNoValue: string = 'Nothing Selected';
  @Input() countryCode: string | null;
  private _selectValue: any = '';
  private _onTouchedCallback: () => {};
  private _onChangeCallback: (_: any) => {};
  _inputValue;
  hasValue;
  provinces:Array<any>;
  private initCounter:number = 0;
  private data: Array<any>;
 

  constructor() { }

  ngOnInit() { 
  }

  
  
  /**
   * This method is run when the countryCode is changed.
   * 
   * @param inputChanges {number} when > 0 unset the state province.
   */
  ngOnChanges(inputChanges) { 
    // this means that the address object was replaced
    if (inputChanges.countryCode) { 
      if (this.initCounter) this.selectValue = '';
      this.getProvinceList();
      this.initCounter++;
    } 
  }
  
  /**
   * @returns {array} language based provinces by the selected country.
   */
  getProvinceArray():Array<any>{
    let arr = [];
    let returnArr = [];
    if (!this.countryCode) return [];
    switch(this.lang.toLocaleLowerCase()) {
      default:
        arr = enProvinces;
    }
    
    arr.map((value,index) => {
      if (value.country === this.countryCode && value.code && value.country) returnArr.push(value);
    })
   
    return returnArr;
  }
  
  /**
   * set the {provinces}
   */
  getProvinceList() {
    
    if (!this.countryCode) {
      return this.provinces = [];
    }
    
    let arr = this.getProvinceArray()    
    if (this.noValue) arr.unshift({code: '', province: this.initNoValue});

    this.provinces = arr;
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
