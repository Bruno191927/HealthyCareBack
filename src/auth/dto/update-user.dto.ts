import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {IsString,IsDate} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    lastName:string
    @IsString()
    urlLink:string
    @IsString()
    urlId:string
    @IsDate()
    updateAt:Date
}
