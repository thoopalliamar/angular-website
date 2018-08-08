import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {RouterModule,Routes} from'@angular/router';
import { hostElement } from '@angular/core/src/render3/instructions';

const approutes : Routes=[
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"projects",children:[
    {path:'project',component:ProjectListComponent, children:[
      {path:'details/:name',component:ProjectsComponent}
    ]}
  ]},
  {path:"**",redirectTo:'/home',pathMatch:'full'},
  {path:"",redirectTo:'/home',pathMatch:'full'}

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProjectsComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
