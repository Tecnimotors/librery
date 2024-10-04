import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class BookserviceService {
  private baseUrl = environment.mylectura;
  private promocionDiario = '/bmg_books/promocion_diaria';

  constructor(private http: HttpClient) {}
  getPromocionDiario(): Observable<any> {
    return this.http.get(
      this.baseUrl + this.promocionDiario + '?idioma=español&limit=10&offset=0'
    );
  }
}
