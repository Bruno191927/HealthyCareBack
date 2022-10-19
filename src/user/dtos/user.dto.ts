import {
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  IsEmail,
  Length,
  IsMongoId,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @ApiProperty()
  @IsString()
  @Length(6, 20)
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly dni: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly birthdate: string;

  @ApiProperty()
  @IsPhoneNumber('PE')
  @IsNotEmpty()
  readonly phone: string;

  @ApiProperty()
  @IsString()
  @IsMongoId()
  @IsNotEmpty()
  readonly typeUser: string;
}

export class CreateSpecialistDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @ApiProperty()
  @IsString()
  @Length(6, 20)
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly dni: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly birthdate: string;

  @ApiProperty()
  @IsPhoneNumber('PE')
  @IsNotEmpty()
  readonly phone: string;

  @ApiProperty()
  @IsString()
  @IsMongoId()
  @IsNotEmpty()
  readonly typeUser: string;

  @ApiProperty()
  @IsString()
  @IsMongoId()
  @IsNotEmpty()
  readonly typesSpecialization: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class UpdateSpecialistDto extends PartialType(CreateSpecialistDto) {}
