import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './home/home.component';
import { StudentsContainerComponent } from './students-entity/students-container/students-container.component';
import { StudentDetailComponent } from './students-entity/student-detail/student-detail.component';
import { StudentDataService } from './services/student-data.service';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import {StudentsDetailResolverService} from './services/students-detail-resolver.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'student', component: StudentsContainerComponent},
  {path: 'student/:id', component: StudentDetailComponent, resolve: {detail: StudentsDetailResolverService}},
  {path: 'child' , component: ChildComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
