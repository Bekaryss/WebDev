import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '../models/project';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() project: Project;
  @Output() delete = new EventEmitter();

  constructor() { }
  
  onDelete(){
    this.delete.emit(this.project);
    }


}
