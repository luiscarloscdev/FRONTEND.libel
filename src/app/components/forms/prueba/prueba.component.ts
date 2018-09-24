import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styles: []
})
export class PruebaComponent implements OnInit {
  forma: FormGroup;
  constructor() { }

  usuario: any={
    'nombre':'Mario',
    'apellido':'Moreira',
    'correo':'mgmoreiradure@gmail.com'
    // 'pasatiempos':['comer','correr','dormir']
  };

  ngOnInit() {
    this.forma= new FormGroup({
      'nombre': new FormControl('',[
                                    Validators.required,
                                    Validators.minLength(3)
                                    ]),
      'apellido': new FormControl('',Validators.required),
      'correo': new FormControl('',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2.3}$')]),
      'pasatiempos': new FormArray([
        new FormControl('correr', Validators.required)
      ])
    });


    // this.forma.setValue(this.usuario);
  }
  guardarCambios(){
    console.log(this.forma.value);
    this.forma.reset(this.usuario);
  }
  agregarPasatiempos(){
    console.log('entro');
    (<FormArray>this.forma.controls['pasatiempos'])
      .push(
         new FormControl('dormir', Validators.required)
      );
  }
  noHerrera(control: FormControl):{[s:string]:boolean}{
    if(control.value=== "herrera"){
      return{
        noherrera:true
      }
    }
    return null;
  }

}
