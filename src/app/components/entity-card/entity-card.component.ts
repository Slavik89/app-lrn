import { Component, Input } from '@angular/core';
import { Student } from '../../models/student-model';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss']
})
export class EntityCardComponent {

  @Input() student: Student;

  get fullName() {
    return `${this.student ? this.student.name : '' }`;
  }

}
