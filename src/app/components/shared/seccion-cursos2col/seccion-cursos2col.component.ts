import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {GLOBAL} from '../../../services/global';
@Component({
  selector: 'app-seccion-cursos2col',
  templateUrl: './seccion-cursos2col.component.html'
})
export class SeccionCursos2colComponent implements OnInit {
  @Input() cursos: any[];
   @Input() nombre : string;
   @Input() cursouno: any[];
  
  constructor(private _router: Router) { }

  ngOnInit() {
    console.log(this.cursouno);
  }
  verCursos(){
    this._router.navigate(['/cursos']);
 }
}
