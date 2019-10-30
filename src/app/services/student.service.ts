import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  readonly URL_API = 'http://localhost:3000/posts/';

  constructor(private http: HttpClient) { }

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.URL_API);
  }
}
