import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from'@angular/router'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  name :any;
  sub :any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub=this.route.params.subscribe(params =>{
      this.name=params['name']
    })
  }

}
