import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientListRoutingModule } from './pacient-list-routing.module';
import { PacientListComponent } from './pacient-list.component';
import { PacientsComponent } from '../pacient.component';


@NgModule({
  declarations: [ PacientListComponent ],
  imports: [
    CommonModule,
    PacientListRoutingModule,
    
  ]
})
export class PacientListModule { }
