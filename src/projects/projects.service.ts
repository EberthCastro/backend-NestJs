import { Injectable } from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import { Project } from '../schemas/project.schema'
import { Model } from 'mongoose'
import { CreateProjectDto } from '../dto/create-project.dto'
import { UpdateProjectDto } from '../dto/update-project.dto'

@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Project.name) private projectModel: Model<Project>) {}

    findAll() {
        return this.projectModel.find();
    }

    async create(createProject: CreateProjectDto) {
        const newProject = new this.projectModel(createProject);
        return newProject.save();
    }

    async findOne(id: string) {
        return this.projectModel.findById(id);
    }

    async delete(id: string) {
        return this.projectModel.findByIdAndDelete(id);
    }

    async update(id: string, project: UpdateProjectDto) {
        return this.projectModel.findByIdAndUpdate(id, project, {new: true});
    }
}
