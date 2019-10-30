import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DbModel } from '../models/dbModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  readonly URL_API = 'http://localhost:3000/posts/';

  constructor(private http: HttpClient) { }

  getDb(): Observable<DbModel[]> {
    return this.http.get<DbModel[]>(this.URL_API);
  }
}
