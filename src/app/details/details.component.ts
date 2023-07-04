import { Component, OnInit } from '@angular/core';
import { Icourses } from '../Icourses';
import { ActivatedRoute, Params } from '@angular/router';
import { courses } from '../courses';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
   course : Icourses = {} as Icourses;
   index : number = 0;

   constructor(private activatedRoute : ActivatedRoute){}



   ngOnInit(): void {
     this.activatedRoute.params.subscribe((params: any)=>{
      this.index = Number(params["id"]);
      this.course = courses[this.index];

     })
   }
}
