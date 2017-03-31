import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import { Observable } from 'rxjs/Rx';

import { Project } from '../models/project';
import { ProjectTask } from '../models/task';

@Injectable()
export class ProjectsService {
  private apiUrl: string = 'http://tas.ddnsfree.com:40010/odata/';

  constructor(private http: Http) {
   }

  getProjects(): Observable<Project[]>{
    return this.http.get(this.apiUrl + 'Projects?$expand=ProjectTasks')
      .map(res => res.json().value as Project[])
      .catch(this.handleError);     
  }

  createProject(project: Project) { 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    this.http.post(this.apiUrl + 'Projects', project, options)
      .map(res => res.json().value as Project[])
      .catch(this.handleError).subscribe(any => location.reload());            
  }

  deleteProject(project: Project){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let url = `${this.apiUrl}/Projects(${project.Id})`;

    return this.http.delete(url, options)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('Some error!!!', error);
    return Observable.throw(error.message || error);
  }
}
