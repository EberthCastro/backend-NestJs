import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from 'src/dto/create-project.dto';

@Controller('api/projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}
        
        @Get()
        findAll() {
            // return 'Get all projects';
            return this.projectsService.findAll();
        }

        @Get(':id')
        findOne() {
            return 'Get one project';
        }

        @Post()
        create(@Body() body: CreateProjectDto) {
            return this.projectsService.create(body);
        }

        @Delete(':id')
        delete(@Param('id') id:string ) {
            return this.projectsService.delete(id);
        }

        @Put(':id')
        update() {
            return 'Updated project';
        }
    
}
