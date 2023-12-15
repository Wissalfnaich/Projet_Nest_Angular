/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from '../entities/appointment.entity';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentsRepository: Repository<Appointment>,
  ) {}

  create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    const appointment = this.appointmentsRepository.create(createAppointmentDto);
    return this.appointmentsRepository.save(appointment);
  }

  findAll(): Promise<Appointment[]> {
    return this.appointmentsRepository.find();
  }

  async findOne(id: number): Promise<Appointment> {
    const appointment = await this.appointmentsRepository.findOneBy({ id });
    if (!appointment) {
      throw new NotFoundException(`Appointment with ID "${id}" not found`);
    }
    return appointment;
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment> {
    const appointment = await this.findOne(id);
    return this.appointmentsRepository.save({ ...appointment, ...updateAppointmentDto });
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.appointmentsRepository.delete(id);
  }
}
