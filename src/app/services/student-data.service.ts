import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../models/student-model';
import { of } from 'rxjs';

const Students = [
  new Student( 0, 'Slavik'),
  new Student( 1, 'Andriy'),
];

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor() {
   }

   fetchStudents(): Observable<Student[]> {
    return of(Students);
  }

  fetchStudent(id: number | string): Observable<Student> {
    const student = Students.find(stud => stud.id === +id);
    return of(student);
  }
}
