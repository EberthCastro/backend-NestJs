import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';

@Module({
  imports: 
    [MongooseModule.forRoot('mongodb+srv://test:test1234@cluster0.g7jowcz.mongodb.net/?retryWrites=true&w=majority'),
    ProjectsModule],
  // controllers: [ProjectsController],
  // providers: [ProjectsService],
})
export class AppModule {}
