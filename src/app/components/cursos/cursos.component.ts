import { Component, OnInit } from '@angular/core';
import { CourseService} from '../../services/course.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: []
})
export class CursosComponent implements OnInit {
  categorias: any[]=[];
  softwares: any[]=[];
  tipos: any[]=[];
  level: any[]=[];
  cursos: any[]=[];
  constructor(private _courseService: CourseService) { }

  ngOnInit() {
    this._courseService.getCategoryAll().subscribe((req: any) =>{
      if(req){
        
        this.categorias= req.categories;        
      }
      this._courseService.getLevelAll().subscribe((req: any) =>{
        if(req){
          
          this.level= req.levels;          
        }
        this._courseService.getSoftwareAll().subscribe((req: any) =>{
          if(req){
            
            this.softwares= req.softwares;            
          }
          this._courseService.getTypeAll().subscribe((req: any) =>{
            if(req){
              
              this.tipos= req.typeOfCourses;              
            }
            this._courseService.getCourseAll(1).subscribe((req: any) =>{
              if(req){
                console.log(req);
                this.cursos= req;              
              }
              
            });
          });
        });
      });  
    });   
    //this.categorias= this._courseService.getCategoryAll(); 
  }
  verCategoria(opcion: string){
    this._courseService.getCourseAllCategoria(opcion,1).subscribe((req: any) =>{
      if(req){
        console.log(req);
        this.cursos= req;              
      }
      
    });
  }
  verSoftware(opcion: string){
    this._courseService.getCourseAllSoftware(opcion,1).subscribe((req: any) =>{
      if(req){
        console.log(req);
        this.cursos= req;              
      }
      
    });
  }
  verNivel(opcion: string){
    this._courseService.getCourseAllLevel(opcion,1).subscribe((req: any) =>{
      if(req){
        console.log(req);
        this.cursos= req;              
      }
      
    });
  }
  verTipo(opcion: string){
    this._courseService.getCourseAllType(opcion,1).subscribe((req: any) =>{
      if(req){
        console.log(req);
        this.cursos= req;              
      }
      
    });
  }

}
