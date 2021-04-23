import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifyPacientComponent } from './modify-pacient.component';

const routes: Routes = [{ path: '', component: ModifyPacientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifyPacientRoutingModule { }
