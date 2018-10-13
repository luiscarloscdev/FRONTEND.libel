import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CuadradoMedianoComponent } from './components/shared/cuadrado-mediano/cuadrado-mediano.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PlanesComponent } from './components/planes/planes.component';
import { BlogComponent } from './components/blog/blog.component';
import { MicuentaComponent } from './components/micuenta/micuenta.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CursosLiveComponent } from './components/cursos-live/cursos-live.component';
import { WebinarsComponent } from './components/webinars/webinars.component';
import { SeccionCursosComponent} from './components/shared/seccion-cursos/seccion-cursos.component';


import { app_routing } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from './services/user.service';
import {HomeService} from './services/home.service';
import {CourseService} from './services/course.service';

import { SeccionCursos2colComponent } from './components/shared/seccion-cursos2col/seccion-cursos2col.component';
import { CuadradoGiganteComponent } from './components/shared/cuadrado-gigante/cuadrado-gigante.component';
import { CuadradoChicoComponent } from './components/shared/cuadrado-chico/cuadrado-chico.component';
import { SeccionCursosallComponent } from './components/shared/seccion-cursosall/seccion-cursosall.component';
import { CuadradoComponent } from './components/shared/cuadrado/cuadrado.component';
import { FiltroCursoComponent } from './components/shared/filtro-curso/filtro-curso.component';
import { RegistracionComponent } from './components/forms/registracion/registracion.component';
import { PruebaComponent } from './components/forms/prueba/prueba.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';

import { CarouselModule } from 'angular-bootstrap-md';
import { BannerComponent } from './components/home/banner/model';
import { CustomValidators } from '../app/shared/formCustomValidator';
import { FormErrorService } from './services/formError.service';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    CoursesComponent,
    PlanesComponent,
    BlogComponent,
    MicuentaComponent,
    FooterComponent,
    CursosLiveComponent,
    WebinarsComponent,
    CuadradoMedianoComponent,
    SeccionCursosComponent,
    SeccionCursos2colComponent,
    CuadradoGiganteComponent,
    CuadradoChicoComponent,
    SeccionCursosallComponent,
    CuadradoComponent,
    FiltroCursoComponent,
    RegistracionComponent,
    PruebaComponent,
    PaginationComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    UserService,
    HomeService,
    CourseService,
    CustomValidators,
    FormErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
