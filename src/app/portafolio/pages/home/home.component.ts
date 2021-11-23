import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogicService } from '../../services/logic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('modal') modal: ElementRef;
  proyectos = this.logicService.proyectos;
  imagen = '';

  constructor(private modalService: NgbModal, private logicService: LogicService) {}
  
  open(content) {
    this.modalService.open(this.modal, { size: 'xl', centered: true })
    this.imagen = content
  }

  close() {
    this.modalService.dismissAll()
  }

  ngOnInit(): void {
    this.logicService.getData()
  }
}