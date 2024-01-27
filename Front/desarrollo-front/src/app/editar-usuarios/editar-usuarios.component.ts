import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrl: './editar-usuarios.component.sass'
})
export class EditarUsuariosComponent {
  nuevoUsuario: any = {};
  usuarios: any[] = [];
  departamentos: any[] = [];
  cargos: any[] = [];
  usuarioSeleccionado: any = {};
  selectedDepartamento: number | null = null;
  selectedCargo: number | null = null;

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.cargarDepartamentos();
    this.cargarCargos();
  }

  cargarDepartamentos() {
    this.apiService.getDepartamentos().subscribe((data) => {
      this.departamentos = this.apiService.getArrayFromObject(data);
    });
  }

  cargarCargos() {
    this.apiService.getCargos().subscribe((data) => {
      this.cargos = this.apiService.getArrayFromObject(data);
    });
  }

  cargarUsuarios() {
    this.apiService.getUsers().subscribe((data) => {
      // Asegúrate de que estás obteniendo todos los usuarios
      this.usuarios = this.apiService.getArrayFromObject(data);
    });
  }

  editarusuario(){
    this.apiService.updateUser(this.usuarioSeleccionado).subscribe(
      () => {
        console.log('Usuario actualizado correctamente');
        // Recarga los usuarios después de la actualización
        this.cargarUsuarios();
      },
      error => {
        console.error('Error al actualizar usuario:', error);
      }
    );
  }
  }
  
