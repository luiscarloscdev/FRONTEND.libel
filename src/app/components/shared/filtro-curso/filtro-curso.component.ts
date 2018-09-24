import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {GLOBAL} from '../../../services/global';

@Component({
  selector: 'app-filtro-curso',
  templateUrl: './filtro-curso.component.html'
})
export class FiltroCursoComponent implements OnInit {

  @Input() nombre: string;
  @Input() opciones: any[];
  @Output() opcionSeleccionado: EventEmitter<string>;
  constructor() {
    this.opcionSeleccionado= new EventEmitter();
   }

  ngOnInit() {
  }
  cambiarOpcion(opcion:string){    
    
    this.opcionSeleccionado.emit(opcion);
  }
}
