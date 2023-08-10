import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: 
    [MongooseModule.forRoot('mongodb://localhost/projectsportfolio'),
    ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
