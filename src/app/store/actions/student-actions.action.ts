import { createAction, props, } from '@ngrx/store';
import { Student } from '../../models/student-model';

export const getStudents = createAction('[Student] Get Students');
export const loadSuccess = createAction('[Student] Load Success', props<{students: Student[]}>());
export const loadFail = createAction('[Student] Load Fail');
