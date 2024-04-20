import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IOrcamento } from '../../Interfaces/IOrcamento';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrcamentoService {
  private url = `${environment.apiUrl}/orcamentos`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<IOrcamento[]> {
    return this.http.get<IOrcamento[]>(this.url).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
