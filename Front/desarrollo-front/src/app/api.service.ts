import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getCargos(): Observable<any[]> {
   return this.http.get<any[]>(`${this.apiUrl}/cargos`);
   
 }

 getDepartamentos(): Observable<any[]> {
   return this.http.get<any[]>(`${this.apiUrl}/departamentos`);
 }

 getUsers(): Observable<any[]> {
   return this.http.get<any[]>(`${this.apiUrl}/usuarios`);
 }

  getArrayFromObject(obj: any): any[] {
    return Object.values(obj);
  }
}
