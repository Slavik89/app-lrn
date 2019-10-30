/* const navReducerStore = createReducer(initialState,
    on(homePage, state => 'Home Page'),
    on(studentsPage, state => 'Students Page'),
    on(notFoundedPage, state => 'Not found page')
    );
     */

import { createReducer, on } from '@ngrx/store';
import { getStudents, loadSuccess, loadFail } from '../actions/student-actions.action';
import {Student} from '../../models/student-model';

export interface State {
    loaded: boolean;
    loading: boolean;
    entities: Array<Student>;
  }

export const initialState: State = {
  loaded: false,
  loading: false,
  entities: []
};

export const studentsStore = createReducer(initialState,
    on(getStudents, state => ({...state, loading: true})),
    on(loadSuccess, (state, {students}) => ({loaded: true, loading: false, entities: students})),
    on(loadFail, state => ({...state, loading: false}))
    );

export function studentsReducer(state, action) {
    return studentsStore(state, action);
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getEntities = (state: State) => state.entities;
