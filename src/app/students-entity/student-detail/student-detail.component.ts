import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../models/student-model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StudentDataService } from '../../services/student-data.service';
import { switchMap, map } from 'rxjs/operators';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Resolve } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  student$: Observable<Student>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.route.data.pipe(map(data => { return data.detail;
    })));
    this.student$ = this.route.data.pipe(
      map(data => {
        return data.detail;
      })
    );
  }
}
