import { Component ,  OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrl : './departamentos.component.sass'
})
export class DepartamentosComponent implements OnInit {
  
  departamentos: any[] = []; 

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDepartamentos().subscribe((data) => {
      this.departamentos = Object.values(data);
    });
  } 
} 
