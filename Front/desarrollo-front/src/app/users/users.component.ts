import { Component ,  OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl : './users.component.sass'
})
export class UsersComponent implements OnInit {
  
  usuarios: any[] = [];
  departamentos: any[] = [];
  cargos: any[] = [];
  selectedDepartamento: number | null = null;
  selectedCargo: number | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarDepartamentos();
    this.cargarCargos();
  }
  

  cargarUsuarios() {
    this.apiService.getUsers().subscribe((data) => {
      this.usuarios = this.apiService.getArrayFromObject(data);
    });
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

  editarUsuario(usuario: any) {
    
    console.log('Editar usuario:', usuario);
  }

  eliminarUsuario(usuario: any) {
    
    console.log('Eliminar usuario:', usuario);
  }

  agregarUsuario() {
   
  }

  
  
}
