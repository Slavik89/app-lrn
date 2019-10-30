import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../models/student-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  @Input() students: Student[];
  rowData;

  columnDefs = [
    {headerName: '№'},
    {headerName: 'Name'},
    {headerName: 'Group'},
    {headerName: 'Go to details'}
  ];

  constructor(private router: Router) {
  }

ngOnInit() {
  this.rowData = this.students;
  console.log(this.students);
}

onSelectStudent(id: number) {
  this.router.navigate(['/student', id]);
}



}
