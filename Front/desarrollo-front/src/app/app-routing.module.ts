import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosComponent } from './cargos/cargos.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'cargos', component: CargosComponent },
  { path: 'users', component : UsersComponent},
  { path: 'departamentos', component: DepartamentosComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
