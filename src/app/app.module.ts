import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { DbService } from './services/db.service';
import { SideNavComponent } from './core/side-nav/side-nav.component';
import { StudentsContainerComponent } from './students-entity/students-container/students-container.component';
import { HomeComponent } from './home/home.component';
import { StudentService } from './services/student.service';
import { TooltipModule } from 'ngx-bootstrap';
import { EntityCardComponent } from './components/entity-card/entity-card.component';
import { StudentsTableComponent } from './students-entity/students-table/students-table.component';
import { StudentDetailComponent } from './students-entity/student-detail/student-detail.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { StoreModule } from '@ngrx/store';
import { reducer, reducers } from './store/reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { LoadStudents } from './store/effects/load-students.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { navReducer } from './store/reducers/nav.reducer';
import { AgGridModule } from 'ag-grid-angular';
import { AddStudentComponent } from './components/buttons/add-student/add-student.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SideNavComponent,
    StudentsContainerComponent,
    HomeComponent,
    EntityCardComponent,
    StudentsTableComponent,
    StudentDetailComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([LoadStudents]),
    StoreDevtoolsModule.instrument(),
    AgGridModule.withComponents([])
  ],
  providers: [
    DbService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
