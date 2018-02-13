import { FunctionsService } from './services/functions.service';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Material2CountrySelectComponent } from './material2-country-select.component';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Material2CountrySelectComponent', () => {
  let component: Material2CountrySelectComponent;
  let fixture: ComponentFixture<Material2CountrySelectComponent>;

 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Material2CountrySelectComponent ],
      imports: [FormsModule],
      providers: [FunctionsService],
      schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Material2CountrySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  fit ('should correctly render the basic select',() =>{
    //their should be default Country value.
    expect(fixture.debugElement.nativeElement.innerHtml).toBe('');
  })
});
