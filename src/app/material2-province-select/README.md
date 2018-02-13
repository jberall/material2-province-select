THIS IS A DROP BOX FOR THE LIST OF PROVINCES: 
united states (US)
canada (CA)
mexico (MX)
germany (DE)
Nigeria (NG)
brazil (BR)


To use:
import { Material2ProvinceSelectModule } from '..'
@NgModule({
  imports: [
    CommonModule,
    ...
    Material2ProvinceSelectModule
  ],
  providers: [..],
  declarations: [..]
})

The countryCode needs to reflect the country.
formControlName=""
lang defaults to en (currently supports english(en) only)
[noValue] defaults to true.  If false No Value does not appear.
initNoValue defaults to No Value.
    
<material2-province-select 
countryCode="{{country.value}}" 
formControlName="province" 
placeholder="some prov"  
lang="en" 
initNoValue="-- nothing selected --" 
[noValue]="true"></material2-province-select>