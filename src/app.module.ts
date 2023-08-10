import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsController } from './projects/projects.controller';

@Module({
  imports: 
    [MongooseModule.forRoot('mongodb://localhost/projectsportfolio'),
    ProjectsModule],
  controllers: [ProjectsController],
  providers: [],
})
export class AppModule {}
