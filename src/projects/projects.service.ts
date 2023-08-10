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

    async create(createProject:any) {
        const newProject = new this.projectModel(createProject);
        return newProject.save();
    }

    async findOne(id: string) {
        return this.projectModel.findById(id);
    }

    async delete(id: string) {
        return this.projectModel.findByIdAndDelete(id);
    }

    async update(id: string, project: any) {
        return this.projectModel.findByIdAndUpdate(id, project);
    }
}
