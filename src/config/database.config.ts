import { ConfigService } from '@nestjs/config';
   import { MongooseModuleOptions } from '@nestjs/mongoose';

   export const getDatabaseConfig = async (configService: ConfigService): Promise<MongooseModuleOptions> => {
     return {
       uri: configService.get<string>('MONGODB_URI'),
     };
   };