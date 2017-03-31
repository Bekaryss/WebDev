import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project';
@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];

  constructor(private projectsService: ProjectsService) {
    this.projects = [];
   }

  delete(project: Project){
       this.projectsService.deleteProject(project).subscribe(nf => this.ngOnInit());  
    }

  public ngOnInit() {
    this.projectsService.getProjects().subscribe(projects => this.projects = projects);
  }

}
