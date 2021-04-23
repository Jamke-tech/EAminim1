import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPacientRoutingModule } from './register-pacient-routing.module';
import { RegisterPacientComponent } from './register-pacient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    RegisterPacientComponent
  ],
  imports: [
    CommonModule,
    RegisterPacientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MaterialModule
  ]
})
export class RegisterPacientModule { }
