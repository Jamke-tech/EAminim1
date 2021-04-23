import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifyPacientRoutingModule } from './modify-pacient-routing.module';
import { ModifyPacientComponent } from './modify-pacient.component';


@NgModule({
  declarations: [
    ModifyPacientComponent
  ],
  imports: [
    CommonModule,
    ModifyPacientRoutingModule
  ]
})
export class ModifyPacientModule { }
