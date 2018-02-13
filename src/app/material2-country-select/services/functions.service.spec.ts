import { TestBed, inject } from '@angular/core/testing';

import { FunctionsService } from './functions.service';
import { countriesEn } from './../langs/en';
import { countriesFr } from './../langs/fr';

describe('FunctionsService', () => {
  let service: FunctionsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunctionsService]
    });

    service = TestBed.get(FunctionsService);
  });

  it('should be created', inject([FunctionsService], (service: FunctionsService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  
  it('should return country name in english, test lowercase', () => {
    expect(service.getName('ca')).toBe('Canada');
  });
  
  it('should return country name in english, test mixed case', () => {
    expect(service.getName('Ca')).toBe('Canada');
  });
  
  it('should return country name in english, test uppercase', () => {
    expect(service.getName('CA')).toBe('Canada');
  });
    
  it('should return country name in french', () => {
    expect(service.getName('us','fr')).toBe('États-Unis d\'Amérique');
  });
  
  it('should return country name in english because if not fr then default to english', () => {
    expect(service.getName('CA','de')).toBe('Canada');
  });  
  
  it('should return country list in english', () => {
    expect(service.getList('en')).toBe(countriesEn.countries);
  });  
  
  it('should return country list default to english ', () => {
    expect(service.getList()).toBe(countriesEn.countries);
  });   
  
  it('should return country list english  when not fr or en', () => {
    expect(service.getList('xX')).toBe(countriesEn.countries);
  });   
  
  it('should return country list in French even though in capitals', () => {
    expect(service.getList('FR')).toBe(countriesFr.countries);
  });    
});



