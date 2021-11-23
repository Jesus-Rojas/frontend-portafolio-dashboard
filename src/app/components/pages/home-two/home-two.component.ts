import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const arr = [
  {
    titulo: 'Cootranshuila',
    texto: 'Colabore en algunos cambios de ese proyecto.',
    url: 'https://cootranshuila.com',
    imagen: 'assets/img/cootranshuila.png',
  }
];

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})

export class HomeTwoComponent implements OnInit {
  @ViewChild('modal') modal: ElementRef;
  proyectos:proyecto[] = [];
  
  imagen = '';

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(this.modal, { size: 'xl', centered: true })
    this.imagen = content
  }

  close() {
    this.modalService.dismissAll()
  }

  ngOnInit(): void {
    this.proyectos = arr;
  }

}

interface proyecto {
  titulo: string,
  texto: string,
  url: string,
  imagen: string,
}