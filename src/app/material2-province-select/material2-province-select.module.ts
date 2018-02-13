import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Material2ProvinceSelectComponent } from './material2-province-select.component';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule 
  ],
  exports:[Material2ProvinceSelectComponent],
  declarations: [Material2ProvinceSelectComponent]
})
export class Material2ProvinceSelectModule { }
