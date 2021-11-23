import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi = environment.api_url;

  constructor( private http:HttpClient ) { }

  getData() :Observable<Proyecto[]>  {
    return this.http.get<Proyecto[]>(`${this.urlApi}`)
  }

  postData(proyecto:Proyecto) :Observable<Proyecto[]> {
    return this.http.post<Proyecto[]>(`${this.urlApi}`,proyecto);
  }

  putData(proyecto:Proyecto) :Observable<string> {
    return this.http.put<string>(`${this.urlApi}/${proyecto.id}`,proyecto);
  }

  deleteData(proyecto:Proyecto) :Observable<string> {
    return this.http.delete<string>(`${this.urlApi}/${proyecto.id}`)
  }
}