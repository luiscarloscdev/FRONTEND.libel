import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

declare var  $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./style.scss']
})

export class NavbarComponent implements OnInit {
  @Input() usuarioLogiado = false;
  @Input() usuario: any;
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
    // $('#modalLogin').modal('show');
  }

  verRegistro() {
    $('#modalLogin').modal('show');
  }
}
