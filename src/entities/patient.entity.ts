/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn , ManyToMany,JoinTable } from 'typeorm';
import { Appointment } from '../entities/Appointment.entity';
import { MedicalRecord } from '../entities/medical-record.entity';
import { User } from './user.entity';
@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  lastname: string;
  @Column()
  phone: number;
  @Column()
  Babyname: string;
  @Column()
  Babyage: number;
  @Column()
  Babypoid: number;
  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments: Appointment[];
  @OneToOne(() => MedicalRecord, (medicalRecord) => medicalRecord.patient)
  @JoinColumn()
  medicalRecord: MedicalRecord;
  @ManyToMany(() => User, (user) => user.patients)
  @JoinTable()
  users: User[];
}
