import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { StudentDataService } from '../../services/student-data.service';
import { getStudents, loadSuccess, loadFail } from '../actions/student-actions.action';
import { Student } from '../../models/student-model';

@Injectable()
export class LoadStudents {

    constructor(
        private actions$: Actions,
        private studentsService: StudentDataService) {}

  loadStudents$ = createEffect(() => this.actions$.pipe(
    ofType('[Student] Get Students'),
    switchMap(() => {
      return this.studentsService.fetchStudents()
      .pipe(
        map(students => loadSuccess({students})),
        catchError(() => of(loadFail())
        ));
      }
      )
    )
  );
}
