import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Proyecto } from '../interfaces/proyecto.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  proyectoSubject = new Subject<Proyecto[]>();
  proyectos = this.proyectoSubject.asObservable();

  constructor( private api: ApiService ) { }

  getData(){
    this.api.getData().subscribe( data => {
      this.proyectoSubject.next(data);
    })
  }

  postData(proyecto:Proyecto, form:FormGroup){
    this.api.postData(proyecto)
      .subscribe(res => {
        this.api.getData().subscribe( data => {
          form.reset();
          this.proyectoSubject.next(data);
        });
      });
  }

  putData(proyecto:Proyecto, form:FormGroup){
    this.api.putData(proyecto)
      .subscribe(() => {
        this.api.getData().subscribe( data => {
          form.reset();
          this.proyectoSubject.next(data);
        });
      });
  }

  deleteData(proyecto:Proyecto, form:FormGroup){
    this.api.deleteData(proyecto)
      .subscribe(() => {
        this.api.getData().subscribe( data => {
          form.reset();
          this.proyectoSubject.next(data);
        });
      });
  }
}