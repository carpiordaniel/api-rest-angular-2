import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class GetPersonasService {

  private URL_API: string = environment.ApiUrl;


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.URL_API);
  }


  enviarDatos(datos: any) {
    return this.http.post(`${this.URL_API}/create`, datos);
  }

  eliminarPorId(id: number) {
    const url = `${this.URL_API}/${id}`;
    return this.http.delete(url);
  }

  actualizar(datos: any) {
    return this.http.put(`${this.URL_API}/update`, datos);
  }



}
