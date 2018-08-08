import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projectlist=[
    {name:'prj1'},
    {name:'prj2'},
    {name:'prj3'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
