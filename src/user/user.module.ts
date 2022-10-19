import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './servicios/user/user.service';
import { UserService } from './services/user/user.service';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { SpecializationController } from './controllers/specialization.controller';
import { SpecializationController } from './services/specialization.controller';

@Module({
  providers: [UserService],
  controllers: [UserController, SpecializationController]
})
export class UserModule {}
