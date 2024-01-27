import { Component ,  OnInit} from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrl : './cargos.component.sass'
})
export class CargosComponent implements OnInit {

  cargos: any[] = []; 

  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.apiService.getCargos().subscribe((data) => {
      this.cargos = data;
    });
  }
}

