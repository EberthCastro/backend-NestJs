import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { getDatabaseConfig } from './config/database.config';
   

   @Module({
     imports: [
       ConfigModule.forRoot(),
       MongooseModule.forRootAsync({
         imports: [ConfigModule],
         useFactory: async (configService: ConfigService) => await getDatabaseConfig(configService),
         inject: [ConfigService],
       }),
       ProjectsModule,
     ],
   })
   export class AppModule {}
