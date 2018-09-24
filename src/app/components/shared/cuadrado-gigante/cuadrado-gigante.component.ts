import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {GLOBAL} from '../../../services/global';
@Component({
  selector: 'app-cuadrado-gigante',
  templateUrl: './cuadrado-gigante.component.html',
  styles: []
})
export class CuadradoGiganteComponent implements OnInit {
  @Input() curso: any[];  
  imagen: string;
  constructor() { }

  ngOnInit() {
    console.log(this.curso);
    this.imagen=GLOBAL.urlImgCurso+ this.curso['imageSmall'];
  }

}
