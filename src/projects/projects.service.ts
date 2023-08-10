import { Injectable } from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import { Project } from '../schemas/project.schema'
import { Model } from 'mongoose'


@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Project.name) private projectModel: Model<Project>) {}

    findAll() {
        this.projectModel.find();
    }

    create(createProject:any) {
        const newProject = new this.projectModel(createProject);
        return newProject.save();
    }
}
