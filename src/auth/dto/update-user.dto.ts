import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {IsString,IsDate} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({example:'Doe'})
    @IsString()
    lastName:string
    @ApiProperty({example:'url://http:calse.pe'})
    @IsString()
    urlLink:string
    @ApiProperty({example:'url://http:url.com'})
    @IsString()
    urlId:string
    @ApiProperty({example:'10/04/2022'})
    @IsDate()
    updateAt:Date
}
