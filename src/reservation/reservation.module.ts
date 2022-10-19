import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserService } from './controllers/user/user.service';
import { UserService } from './services/user/user.service';
import { ReservationService } from './services/reservation/reservation.service';
import { ReservationController } from './controllers/reservation/reservation.controller';

@Module({
  providers: [UserService, ReservationService],
  controllers: [ReservationController]
})
export class ReservationModule {}
