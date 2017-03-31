import { ProjectTask } from './task';

export class Project {
    public Id: string;
    public Title: string;
    public Description: string;
    public AdministratorId: string;
    public ProjectTasks: ProjectTask;
    constructor() {}
}