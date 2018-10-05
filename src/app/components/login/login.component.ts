import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';
import {map} from 'rxjs/operators';
declare var  $: any;

@Component({
  selector: 'app-login',
  templateUrl : './login.component.html',
  styleUrls : ['./style.scss']
})

export class LoginComponent implements OnInit {
  usuariologin: any={
    'email':'',
    'password':''
  };
  loginForm: FormGroup;
  loginRegister: FormGroup;
  identity;
  token;
  errorMessage;
  mostrarmsj=false;
  @Output() autenticado: EventEmitter<boolean>;
  constructor(private _userService: UserService) {
    this.autenticado= new EventEmitter();
  }
  ngOnInit() {
    this.loginForm= new FormGroup({
      'email': new FormControl('',[
        Validators.required
        ,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                  ]),
      'password': new FormControl('',Validators.required),
    });
    this.loginForm.setValue(this.usuariologin);
    this.loginRegister = new FormGroup({});
  }
  mostrarMensaje(){
    this.mostrarmsj=true;
  }
  seLogue(){
    //this._router.navigate(['/heroe',this.index]);
    this.autenticado.emit(true);
    $('#modalLogin').modal('hide');
  }
  logiarse(){
    this.mostrarmsj=false;

    this._userService.signup(this.loginForm.value).subscribe(
      (response: any) =>{
        let identity = response.user;
        this.identity = identity;
        if(!this.identity._id){
          console.log("El usuario no está correctamente identificado");
        }else{
          // Crear elemento en el locaStorage para tener al usuario en sesion
          localStorage.setItem('identity',JSON.stringify(identity));
          //Conseguir el token para enciarselo a cada peticion http
          this._userService.signup(this.loginForm.value,true).subscribe(
              (response: any) =>{
                let token = response.token;
                this.token = token;

                if(this.token.length <= 0){
                  alert("El token no se ha generado correctamente");
                }else{
                  // Crear elemento en el locaStorage para tener al usuario en sesion
                  localStorage.setItem('token',token);
                  this.seLogue();
                }
              },
              error => {
                this.errorMessage = <any>error;
                  this.errorMessage = error.error.message;
                  this.mostrarMensaje();
              }
            );
        }
      },
      error => {
        this.errorMessage = <any>error;
                  this.errorMessage = error.error.message;
                  this.mostrarMensaje();
      }
    );

  }
}
