import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { homePage, studentsPage, notFoundedPage } from 'src/app/store/actions/nav-actions.action';
import * as fromRoot from '../../store/reducers/index';
import * as fromNav from '../../store/actions/nav-actions.action';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  navStore$: Observable<any>;

  constructor(private store: Store<any>) {
    this.navStore$ = store.pipe(
      select('sidenav'),
      tap(console.log),
      map(obj => obj.text)
      );
  }

  homePage() {
    this.store.dispatch(homePage());
  }

  studentsPage() {
    this.store.dispatch(studentsPage());
  }

  notFoundedpage() {
    this.store.dispatch(notFoundedPage());
  }
}
