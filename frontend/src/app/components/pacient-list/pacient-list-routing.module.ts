import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientListComponent } from './pacient-list.component';

const routes: Routes = [{ path: '', component: PacientListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientListRoutingModule { }
