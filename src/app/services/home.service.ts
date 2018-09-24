import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {GLOBAL} from './global';

@Injectable()
export class HomeService{
    public url: string;
    constructor(private http: HttpClient){
        this.url = GLOBAL.url;
    }
    // este funcion lo que se encarga es de pedir traer todo lo necesario para la pagina  del home. 
 getHome(){
    return this.http.get(this.url+'home');
     
 }
}