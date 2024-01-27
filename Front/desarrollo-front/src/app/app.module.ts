import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule ,provideHttpClient, withFetch} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargosComponent } from './cargos/cargos.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { UsersComponent } from './users/users.component';
import { AgregarUsuariosComponent } from './agregar-usuarios/agregar-usuarios.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    CargosComponent,
    DepartamentosComponent,
    UsersComponent,
    AgregarUsuariosComponent,
    EditarUsuariosComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModalModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
