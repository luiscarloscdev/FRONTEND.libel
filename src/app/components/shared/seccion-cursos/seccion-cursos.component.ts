import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {GLOBAL} from '../../../services/global';

@Component({
  selector: 'app-seccion-cursos',
  templateUrl: './seccion-cursos.component.html'
})
export class SeccionCursosComponent implements OnInit {
   @Input() cursos: any[];
   @Input() nombre : string;
  constructor() { }

  ngOnInit() {
  }

}
