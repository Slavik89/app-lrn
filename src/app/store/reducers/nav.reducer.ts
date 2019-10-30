import { combineReducers } from '@ngrx/store';

import { createReducer, on } from '@ngrx/store';
import { homePage, studentsPage, notFoundedPage } from '../actions/nav-actions.action';

export interface State {
  text: string;
}

export const initialState: State  = {text: 'Welcome'};

export const navReducerStore = createReducer(initialState,
    on(homePage, state => ({...state, text: 'Home Page'})),
    on(studentsPage, state => ({...state, text: 'Students Page'})),
    on(notFoundedPage, state => ({...state, text: 'Not found page'}))
    );

export function navReducer(state, action) {
    return navReducerStore(state, action);
}

export const getShowSidenav = (state: State) => state.text;
