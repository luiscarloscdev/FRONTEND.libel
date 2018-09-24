import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {GLOBAL} from './global';

@Injectable()
export class CourseService{
    public url: string;
    constructor(private http: HttpClient){
        this.url = GLOBAL.url;
    }
    // este funcion lo que se encarga es de pedir traer todo lo necesario para la pagina  del home. 
    getCategoryAll(){
     return this.http.get(this.url+'categories');
            
    }
    getTypeAll(){
     return this.http.get(this.url+'typeOfCourses');
     
    }
    getLevelAll(){
     return this.http.get(this.url+'levels');
     
    }
    getSoftwareAll(){
     return this.http.get(this.url+'softwares');
     
    }
    getCourseAll(pagina:number){
        return this.http.get(this.url + 'courses/'+ pagina);
    }
    getCourseAllCategoria(id:string ,pagina:number){
        return this.http.get(this.url + 'courses-category/'+id+ '-'+ pagina);
    }
    getCourseAllSoftware(id:string ,pagina:number){
        return this.http.get(this.url + 'courses-software/'+id+ '-'+ pagina);
    }
    getCourseAllLevel(id:string ,pagina:number){
        return this.http.get(this.url + 'courses-level/'+id+ '-'+ pagina);
    }
    getCourseAllType(id:string ,pagina:number){
        return this.http.get(this.url + 'courses-type/'+id+ '-'+ pagina);
    }

}