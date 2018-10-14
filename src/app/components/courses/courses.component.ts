import { Component, OnInit } from '@angular/core';
import { CourseService} from '../../services/course.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./style.scss']
})
export class CoursesComponent implements OnInit {
  categorias: any[]=[];
  softwares: any[]=[];
  tipos: any[]=[];
  level: any[]=[];
  cursos: any[]=[];
  collection = [];
  p: any;
  categories = ['items1', 'items1', 'items1', 'items1', 'items1', 'items1', 'items1'];
  constructor(private _courseService: CourseService, private _router: Router) { }

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push({ 'items' :
        [
          {'val': 1 + 'item-c: ' + i},
          {'val': 2 + 'item-c: ' + i},
          {'val': 3 + 'item-c: ' + i},
          {'val': 4 + 'item-c: ' + i},
          {'val': 5 + 'item-c: ' + i}
        ]
      });
    }
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
