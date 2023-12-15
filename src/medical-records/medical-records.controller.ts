/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MedicalRecordsService } from './medical-records.service';
import { CreateMedicalRecordDto } from '../dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from '../dto/update-medical-record.dto';

@Controller('medical-records')
export class MedicalRecordsController {
  constructor(private readonly medicalRecordsService: MedicalRecordsService) {}

  @Post()
  create(@Body() createMedicalRecordDto: CreateMedicalRecordDto) {
    return this.medicalRecordsService.create(createMedicalRecordDto);
  }

  @Get()
  findAll() {
    return this.medicalRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.medicalRecordsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateMedicalRecordDto: UpdateMedicalRecordDto) {
    return this.medicalRecordsService.update(id, updateMedicalRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.medicalRecordsService.remove(id);
  }
}
