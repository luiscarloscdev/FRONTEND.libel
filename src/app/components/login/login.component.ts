import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CustomValidators } from '../../shared/formCustomValidator';
import { FormErrorService } from '../../services/formError.service';
import {map} from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./style.scss']
})

export class LoginComponent implements OnInit {
  usuariologin: any = {
    'userEmail': '',
    'password': ''
  };
  public formErrors = {
    userEmail: '',
    password: '',
  };
  expresionEmail = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';
  loginForm: FormGroup;
  registerForm: FormGroup;
  submittedLogin = false;
  submittedRegister = false;
  identity;
  token;
  errorMessage;
  mostrarmsj = false;
  @Output()autenticado: EventEmitter <boolean>;
  constructor(
    private _userService: UserService,
    private formBuilder: FormBuilder,
    private formService: FormErrorService) {
    this.autenticado = new EventEmitter();
  }

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   'email': new FormControl('', [
    //     Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    //   ]),
    //   'password': new FormControl('', Validators.required)
    // });
    this.loginForm = this.formBuilder.group({
      // userEmail: ['', [Validators.required, CustomValidators.validateEmailCharacters]],
      userEmail: ['', [Validators.required, this.userEmailValidator()]],
      password: ['', Validators.required]
    });
    // this.loginForm.setValue(this.usuariologin);
    this.loginForm.valueChanges.subscribe((data) => {
      console.log(data);
      this.formErrors = this.formService.validateForm(this.loginForm, this.formErrors, true);
      console.log('subscribe');
      console.log(this.formErrors);
      console.log(this.fLogin.password);
    });
    this.registerForm = this.formBuilder.group({
      user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwordReg: ['', Validators.required]
    });
  }

  get fLogin() { return this.loginForm.controls; }
  get fregister() { return this.registerForm.controls; }

  mostrarMensaje() {
    this.mostrarmsj = true;
  }

  userEmailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      console.log('custom val');
      let nameReg: RegExp;
      // nameReg = this.expresionEmail
      console.log(control.value);
      // if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
      //   return { 'ageRange': true };
      // }
      return null;
    };
  }

  onSubmitLogin() {
    console.log('entrbf  fgdfgd');
    // this.submittedLogin = true;
    this.formService.markFormGroupTouched(this.loginForm);

    // stop here if form is invalid
    if (this.loginForm.valid) {
      alert('SUCCESS!! :-)');
    } else {
      this.formErrors = this.formService.validateForm(this.loginForm, this.formErrors, true);
      console.log(this.formErrors);
      console.log(this.fLogin.password.errors);
    }
  }

  onSubmitRegister() {
    this.formService.markFormGroupTouched(this.registerForm);
    // stop here if form is invalid
    if (this.registerForm.valid) {
      alert('SUCCESS!! :-)');
    } else {
      // this.formErrors = this.formService.validateForm(this.registerForm, this.formErrors, true);
      console.log(this.formErrors);
      console.log(this.fLogin.password.errors);
    }
  }

  seLogue() {
    // this._router.navigate(['/heroe',this.index]);
    this.autenticado.emit(true);
    $('#modalLogin').modal('hide');
  }

  logiarse() {
    this.mostrarmsj = false;

    this._userService.signup(this.loginForm.value).subscribe((response: any) => {
      let identity = response.user;
      this.identity = identity;
      if (!this.identity._id) {
        console.log('El usuario no está correctamente identificado');
      } else {
        // Crear elemento en el locaStorage para tener al usuario en sesion
        localStorage.setItem('identity', JSON.stringify(identity));
        // Conseguir el token para enciarselo a cada peticion http
        this._userService.signup(this.loginForm.value, true).subscribe((response: any) => {
            let token = response.token;
            this.token = token;

            if (this.token.length <= 0) {
              alert('El token no se ha generado correctamente');
            } else {
              // Crear elemento en el locaStorage para tener al usuario en sesion
              localStorage.setItem('token', token);
              this.seLogue();
            }
          }, error => {
            this.errorMessage = <any>error;
            this.errorMessage = error.error.message;
            this.mostrarMensaje();
          });
        }
      }, error => {
        this.errorMessage = <any>error;
      });
  }
}
