import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public data;
  courseLive: any[]=[];​
  courseNew: any[]=[];
  courses: any[]=[];​
  coursesFree: any[]=[];  ​
  coursesZbrush: any[]=[];  
  course1: any[]=[];
  constructor(private homeService: HomeService,private _router: Router) {
     
   }
   verCursos(){
      this._router.navigate(['/cursos']);
   }
  ngOnInit() {
    this.homeService.getHome().subscribe((req : any) =>{
      if(req.courseLive){
        this.courseLive= req.courseLive;
      }
      if(req.courseNew){
        this.courseNew=req.courseNew;
      }
      if(req.courses){
        this.courses=req.courses;
      }
      if(req.coursesFree){
        this.coursesFree=req.coursesFree;
      }
      if(req.coursesZbrush){
        this.coursesZbrush= req.coursesZbrush;
     

      }
      if(req.course1){
        this.course1=req.course1;
        
      }
    });
    
  }

}
