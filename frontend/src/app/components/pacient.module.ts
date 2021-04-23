import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModifyPacientComponent } from './modify-pacient/modify-pacient.component';
import { PacientListComponent } from './pacient-list/pacient-list.component';
import { RegisterPacientComponent } from './register-pacient/register-pacient.component';
import { PacientsComponent } from './pacient.component';

const myComponents = [
    ModifyPacientComponent,
    PacientListComponent,
    PacientsComponent
];

@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule],
  exports: [...myComponents],
})
export class UsersModule {}