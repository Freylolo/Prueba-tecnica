// cargos.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.sass']
})
export class CargosComponent implements OnInit {
  cargos: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCargos().subscribe((data) => {
      this.cargos = data;
    });
  }

  agregarCargo() {
    // Lógica para agregar un nuevo cargo
    // Puedes abrir un modal, redirigir a otra página, etc.
    console.log('Agregar nuevo cargo...');
  }
}
