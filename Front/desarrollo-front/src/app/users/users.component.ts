import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgregarUsuariosComponent } from '../agregar-usuarios/agregar-usuarios.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  providers: [RouterLink]
})
export class UsersComponent implements OnInit {

  usuarios: any[] = [];
  departamentos: any[] = [];
  cargos: any[] = [];
  selectedDepartamento: number | null = null;
  selectedCargo: number | null = null;
  usuarioSeleccionado: any = {};
  itemsPerPage: number = 20; 
  currentPage: number = 1;
  usuariosEnPagina: any[] = [];
  totalPages: number = 0;


  @ViewChild('editarUsuario', { static: false }) editarUsuario!: ElementRef;
  @ViewChild(AgregarUsuariosComponent) agregarUsuariosComponent!: AgregarUsuariosComponent;

  constructor(private apiService: ApiService, public dialog: MatDialog, private modalService: NgbModal )  { }

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarDepartamentos();
    this.cargarCargos();
  }

  cargarUsuarios() {
    this.apiService.getUsers().subscribe((data) => {
      // Asegúrate de que estás obteniendo todos los usuarios
      this.usuarios = this.apiService.getArrayFromObject(data);
      // Calcula el número total de páginas
      this.totalPages = Math.ceil(this.usuarios.length / this.itemsPerPage);
      // Establece los usuarios para la primera página
      this.setPage(this.currentPage);
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

  editarusuario(usuario: any) {
    const modalRef = this.modalService.open(AgregarUsuariosComponent, { size: 'lg' });
  
    modalRef.componentInstance.usuario = usuario;
      modalRef.closed.subscribe(() => {
      this.cargarUsuarios();
    });
  }
  
  
  eliminarUsuario(id: number): void {
    const usuario = this.usuarios.find(u => u.id === id);
  
    if (usuario) {
      this.apiService.deleteUser(usuario.id).subscribe(
        () => {
          this.cargarUsuarios();
          console.log('Usuario eliminado correctamente');
        },
        error => {
          console.error('Error al eliminar usuario:', error);
          // Muestra el error completo en la consola
          alert(`Error al eliminar usuario. Detalles: ${JSON.stringify(error)}`);
        }
      );
    } else {
      console.error('Usuario no encontrado para eliminar');
    }
  }
  
  agregarUsuario() {
    this.modalService.open(AgregarUsuariosComponent, { size: 'lg' });
     console.log('Usuario agregado correctamente');
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
  
    this.currentPage = page;
  
    // Calcula el índice de inicio y fin de los elementos
    let start = (page - 1) * this.itemsPerPage;
    let end = Math.min(start + this.itemsPerPage - 1, this.usuarios.length - 1);
  
    // Ahora, en lugar de 'usuarios', usa una nueva variable 'usuariosEnPagina'
    this.usuariosEnPagina = this.usuarios.slice(start, end + 1);
  }
}
