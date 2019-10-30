import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { Observable } from 'rxjs';
import { DbModel } from '../../models/dbModel';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  dbList: Observable<DbModel[]>;

  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.dbList = this.dbService.getDb();
    //console.log(this.dbService.getDb().subscribe( (data: DbModel[]) => data));
  }

}
