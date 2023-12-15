import { Module } from '@nestjs/common';
import { MedicalRecordsService } from './medical-records.service';
import { MedicalRecordsController } from './medical-records.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRecord } from '../entities/medical-record.entity';
@Module({
  imports: [TypeOrmModule.forFeature([MedicalRecord])],

  providers: [MedicalRecordsService],
  controllers: [MedicalRecordsController],
})
export class MedicalRecordsModule {}
