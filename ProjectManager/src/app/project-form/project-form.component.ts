import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project';
import { ProjectListComponent } from "app/project-list/project-list.component";

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  title: string = '';
  description: string = '';
  project: Project = new Project();

  constructor(private projectService: ProjectsService) { }

  onSubmit(){
    this.project.Title = this.title;
    this.project.Description = this.description;
    this.projectService.createProject(this.project);
  }

  ngOnInit() {
  }

}
