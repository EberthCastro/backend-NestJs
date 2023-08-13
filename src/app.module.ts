import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Import the ConfigModule here
      useFactory: async (configService: ConfigService) => {
        const mongooseOptions: MongooseModuleOptions = {
          uri: configService.get<string>('MONGODB_URI'),
        };
        return mongooseOptions;
      },
      inject: [ConfigService],
    }),
    ProjectsModule,
  ],
})
export class AppModule {}
