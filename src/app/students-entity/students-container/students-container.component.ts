import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student-model';
import { StudentService } from '../../services/student.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getStudents } from '../../store/actions/student-actions.action';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-students-container',
  templateUrl: './students-container.component.html',
  styleUrls: ['./students-container.component.scss']
})
export class StudentsContainerComponent implements OnInit {

  students$: Observable<Student[]>;
  studentsList$ = this.store.pipe(
    select('students'),
    tap(console.log),
    map(obj => obj.entities),
    tap(console.log)
    );

  constructor(private studentService: StudentService, private store: Store<{studentsList: Student[]}>) { }

  ngOnInit() {
    this.students$ = this.studentService.getStudent();
    this.store.dispatch(getStudents());
  }

}
