import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosComponent } from './cargos/cargos.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { UsersComponent } from './users/users.component';
import { AgregarUsuariosComponent } from './agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';

const routes: Routes = [
  { path: 'cargos', component: CargosComponent },
  { path: 'users', component : UsersComponent},
  { path: 'departamentos', component: DepartamentosComponent },
  { path: 'agregar-usuarios', component: AgregarUsuariosComponent },
  { path: 'editar-usuarios', component: EditarUsuariosComponent},
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
