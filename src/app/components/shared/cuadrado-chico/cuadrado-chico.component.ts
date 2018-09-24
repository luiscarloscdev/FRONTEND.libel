import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {GLOBAL} from '../../../services/global';

@Component({
  selector: 'app-cuadrado-chico',
  templateUrl: './cuadrado-chico.component.html',
  styles: []
})
export class CuadradoChicoComponent implements OnInit {
  @Input() curso: any[]=[];  
  imagen: string;
  constructor() { }

  ngOnInit() {
    this.imagen=GLOBAL.urlImgCurso+ this.curso['imageSmall'];
  }

}
