import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '',
  redirectTo: 'pacient-list',
  pathMatch: 'full',

},
  
{ path: 'pacient-list', loadChildren: () => import('./components/pacient-list/pacient-list.module').then(m => m.PacientListModule) },
{ path: 'register-pacient', loadChildren: () => import('./components/register-pacient/register-pacient.module').then(m => m.RegisterPacientModule) },
  
{ path: 'modify-pacient/:id', loadChildren: () => import('./components/modify-pacient/modify-pacient.module').then(m => m.ModifyPacientModule) }
//Posarem totes les rutes de la nostra web aqui




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
