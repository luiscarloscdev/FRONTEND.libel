import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {GLOBAL} from '../../../services/global';

@Component({
  selector: 'app-cuadrado-mediano',
  templateUrl: './cuadrado-mediano.component.html'
})
export class CuadradoMedianoComponent implements OnInit {
  @Input() curso: any[]=[];  
  imagen: string;
  constructor() { }

  ngOnInit() {
    this.imagen=GLOBAL.urlImgCurso+ this.curso['imageSmall'];
  }
}



