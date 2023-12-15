/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from '../entities/patient.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  providers: [PatientsService],
  controllers: [PatientsController]
})
export class PatientsModule {}
