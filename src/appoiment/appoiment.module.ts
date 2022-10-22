import { Module } from '@nestjs/common';
import { AppoimentService } from './appoiment.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppoimentController } from './appoiment.controller';
import { ConfigModule } from '@nestjs/config';
import { Appoiment, AppoimentSchema } from './entities/appoiment.entity';

@Module({
  controllers: [AppoimentController],
  providers: [AppoimentService],
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name:Appoiment.name,
        schema: AppoimentSchema
      }
    ]),
  ]
})
export class AppoimentModule {}
