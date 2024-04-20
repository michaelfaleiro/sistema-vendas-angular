import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICliente } from '../../Interfaces/ICliente';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  url = `${environment.apiUrl}/clientes`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ICliente[]> {
    return this.http
      .get<{ data: ICliente[] }>(this.url)
      .pipe(map((response) => response.data));
  }

  getByTelefone(telefone: string): Observable<ICliente[]> {
    return this.http
      .get<ICliente[]>(`${this.url}/buscar?query=${telefone}`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getById(id: string): Observable<ICliente> {
    return this.http
      .get<ICliente>(`${this.url}/${id}`)
      .pipe(map((response) => response));
  }
}
