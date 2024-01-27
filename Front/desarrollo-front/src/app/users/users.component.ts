import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';



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
  itemsPerPage: number = 8;
  currentPage: number = 1;
  usuarioSeleccionado: any = {};

  @ViewChild('editarUsuario', { static: false }) editarUsuario!: ElementRef;

  constructor(private apiService: ApiService , public dialog: MatDialog )  { }

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

  abrirModal(usuario: any) {
    this.usuarioSeleccionado = { ...usuario }; // Crear una copia del usuario para evitar enlace bidireccional
  
    const dialogRef = this.dialog.open(MatDialog, {
      width: '250px',
      data: { usuario: this.usuarioSeleccionado }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  cerrarModal() {
    this.editarUsuario.nativeElement.hide();
  }

  eliminarUsuario(usuario: any): void {
    this.apiService.deleteUser(usuario.id).subscribe(
      () => {
        this.cargarUsuarios();
        console.log('Usuario eliminado correctamente');
      },
      error => {
        console.error('Error al eliminar usuario:', error);
      }
    );
  }

  
  agregarUsuario() {
    
  }

  guardarCambios() {
    this.apiService.updateUser(this.usuarioSeleccionado)
      .subscribe(() => {
        this.cargarUsuarios(); 
        this.cerrarModal();
        console.log('Usuario actualizado correctamente');
      }, (error: any) => {
        console.error('Error al actualizar usuario:', error);
        
      });
  }

  get totalPages(): number {
    return Math.ceil(this.usuarios.length / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

}
