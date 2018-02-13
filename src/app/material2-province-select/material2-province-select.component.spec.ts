import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Material2ProvinceSelectComponent } from './material2-province-select.component';

describe('Material2ProvinceSelectComponent', () => {
  let component: Material2ProvinceSelectComponent;
  let fixture: ComponentFixture<Material2ProvinceSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Material2ProvinceSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Material2ProvinceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
