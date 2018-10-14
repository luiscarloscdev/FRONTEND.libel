import { RouterModule, Routes, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PlanesComponent } from './components/planes/planes.component';
import { CursosLiveComponent } from './components/cursos-live/cursos-live.component';
import { BlogComponent } from './components/blog/blog.component';
import { WebinarsComponent } from './components/webinars/webinars.component';
import { ViewCourseComponent } from './components/courses/view-course/view.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cursos', component: CoursesComponent },
  { path: 'view', component: ViewCourseComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'cursoslive', component: CursosLiveComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'webinar', component: WebinarsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const app_routing = RouterModule.forRoot(app_routes);
