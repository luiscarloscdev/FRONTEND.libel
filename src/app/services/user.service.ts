import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {GLOBAL} from './global';

@Injectable()
export class UserService{
    public url: string;
    constructor(private http: HttpClient){
        this.url = GLOBAL.url;
    }

 getPrueba(){
     this.http.get(this.url+'probando-controlador')
     .subscribe(req =>{
         console.log(req);
     });     
 } 
 signup(user_to_login, gethash = null){
    if(gethash != null){
        user_to_login.gethash= gethash;
    }  
    let json= JSON.stringify(user_to_login);
    let params = json;
    
     let headers = new HttpHeaders({'Content-Type': 'application/json'});
     return this.http.post(this.url + 'login', params, {headers: headers})
     .pipe(map(res => res)); 
     
 }

}