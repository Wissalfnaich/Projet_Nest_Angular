import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointment.service';
import { AppointmentsController } from './appointment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from '../entities/Appointment.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Appointment])],
  providers: [AppointmentsService],
  controllers: [AppointmentsController],
})
export class AppointmentsModule {}
