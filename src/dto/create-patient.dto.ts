/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsNumber ,Max, IsNumberString, Length} from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly lastname: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(8, 8)
  readonly phone: number;

  @IsNotEmpty()
  @IsString()
  readonly babyName: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(16)
  readonly babyAge: number;

  @IsNotEmpty()
  @IsNumber()
  readonly babyWeight: number;
}
