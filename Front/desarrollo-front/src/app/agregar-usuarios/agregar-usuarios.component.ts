import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrl: './agregar-usuarios.component.sass'
})
export class AgregarUsuariosComponent {

  nuevoUsuario: any = {};
  usuarios: any[] = [];
  departamentos: any[] = [];
  cargos: any[] = [];
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

  guardarUsuario() {
    // Obtiene los valores de los campos de selección
    const idDepartamento = this.selectedDepartamento;
    const idCargo = this.selectedCargo;
  
    // Asigna los valores a los campos del objeto `nuevoUsuario`
    this.nuevoUsuario.idDepartamento = idDepartamento;
    this.nuevoUsuario.idCargo = idCargo;
  
    // Llama al servicio para crear el usuario
    this.apiService.createUser(this.nuevoUsuario).subscribe(
      (response) => {
        console.log('Usuario Guardado:', response);
  
        // Limpia el formulario
        this.nuevoUsuario = {};
      },
      (error) => {
        console.error('Error al crear el usuario:', error);
        console.log('Respuesta del servidor:', error.error);
      }
    );
  }
  
}


