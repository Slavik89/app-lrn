import { createSelector, ActionReducer } from '@ngrx/store';
import * as fromSidenav from './nav.reducer';
import * as fromStudent from './students.reducer';
import { combineReducers } from '@ngrx/store';

export interface State {
    sidenav: fromSidenav.State;
    students: fromStudent.State;
  }

export const reducers = {
  sidenav: fromSidenav.navReducer,
  students: fromStudent.studentsReducer
};

export const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return productionReducer(state, action);
}

// Navigational selectors
export const getSidenavState = (state: State) => state.sidenav;
export const getShowSidenav = createSelector(getSidenavState, fromSidenav.getShowSidenav);

// Student's selectors
export const getStudentState = (state: State) => state.students;

export const getStudentEntities = createSelector(getStudentState, fromStudent.getEntities);
export const getStudentLoaded = createSelector(getStudentState, fromStudent.getLoaded);
export const getStudentLoading = createSelector(getStudentState, fromStudent.getLoading);
