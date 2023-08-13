import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from 'src/dto/create-project.dto';

@Controller('api/projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}
        
        @Get()
        findAll() {            
            return this.projectsService.findAll();
        }

        @Get(':id')
        async findOne(@Param('id') id: string) {
            const project = await this.projectsService.findOne(id);
            if (!project) {
                throw new NotFoundException('Project not found');
            }
            return project;
        }

        @Post()
        async create(@Body() body: CreateProjectDto) {
            try {
                 return await this.projectsService.create(body);                
            } catch (error) {
                if (error.code == 11000) {
                    throw new ConflictException('Project already exists');
                }
                throw error;
            }
        }

        @Delete(':id')
        @HttpCode(204)
        async delete(@Param('id') id:string ) {
            const project = await this.projectsService.delete(id);
            if (!project) {
                throw new NotFoundException('Project not found');
            }
            return project;
        }

        @Put(':id')
        async update(@Param('id') id:string, @Body() body: any ) {
            const project = await this.projectsService.update(id, body);
            if (!project) throw new NotFoundException('Project not found');
            return project;
        }
    
}
