import { Injectable } from '@angular/core';
import { StudentDataService} from './student-data.service';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Student} from './../models/student-model';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsDetailResolverService implements Resolve<Student> {

  constructor(private sds: StudentDataService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Student> | Observable<never> {
    const id = route.paramMap.get('id');
    console.log(route.paramMap.get('id'));
    return this.sds.fetchStudent(id).pipe(
      take(1),
      mergeMap(student => {
        if (student) {
          return of(student);
        } else {
          this.router.navigate(['/not-founded-page']);
          return EMPTY;
        }
      })
    );
  }
}
