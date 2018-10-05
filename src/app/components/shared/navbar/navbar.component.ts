import { Component, OnInit, Input} from '@angular/core';

declare var  $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./style.scss']
})

export class NavbarComponent implements OnInit {
  @Input() usuarioLogiado = false;
  @Input() usuario: any;
  constructor() {}

  ngOnInit() {
    // $('#modalLogin').modal('show');
  }

  verRegistro() {
    $('#modalLogin').modal('show');
  }
}
