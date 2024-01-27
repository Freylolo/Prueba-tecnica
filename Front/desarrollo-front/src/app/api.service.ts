import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un error:', error.error.message);
    } else {
      console.error(`El servidor retornó un código ${error.status}, ` + `error: ${error.error}`);
    }
    return throwError('Algo salió mal');
  }

  private extractData(response: any) {
    return response.data || {};
  }

  getCargos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cargos`).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/departamentos`).pipe(
      catchError(this.handleError)
    );
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuarios`).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuarios`, user).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/usuarios/${user.id}`, user).pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/usuarios/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getArrayFromObject(obj: any): any[] {
    return Object.values(obj);
  }
}
