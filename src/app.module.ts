import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppointmentsModule } from './appointments/appointments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsModule } from './patients/patients.module';
import { MedicalRecordsModule } from './medical-records/medical-records.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      debug: false,
    }),
    PatientsModule,
    AppointmentsModule,
    MedicalRecordsModule,
    AuthModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
