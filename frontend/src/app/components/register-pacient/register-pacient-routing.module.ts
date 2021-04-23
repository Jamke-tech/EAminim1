import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPacientComponent } from './register-pacient.component';

const routes: Routes = [{ path: '', component: RegisterPacientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPacientRoutingModule { }
