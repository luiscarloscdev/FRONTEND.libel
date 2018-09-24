import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {GLOBAL} from '../../../services/global';

@Component({
  selector: 'app-seccion-cursosall',
  templateUrl: './seccion-cursosall.component.html',
  styles: []
})
export class SeccionCursosallComponent implements OnInit {
  @Input() cursos: any[];
  constructor() { }

  ngOnInit() {
  }

}
