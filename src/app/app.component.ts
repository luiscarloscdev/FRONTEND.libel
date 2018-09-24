import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libelAngular';
  logueado=false;
  usuarioSession:any[]=[];


  abilitar(idx: boolean){
    if(idx== true){
      this.logueado=true;
    }else{
      this.logueado=false;
    }
  }
}
