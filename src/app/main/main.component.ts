import { Component } from '@angular/core';
import { Icourses } from '../Icourses';
import { courses } from '../courses';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
 courses:Icourses [] = courses 
}
