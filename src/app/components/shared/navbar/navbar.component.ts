import { Component, OnInit, Input} from '@angular/core';

declare var  $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  
  constructor() { }
  @Input() usuarioLogiado=false;
  @Input() usuario: any;
  ngOnInit() {
  }
  verRegistro(){
    
    $('#modalLogin').modal('show');
  }
}
