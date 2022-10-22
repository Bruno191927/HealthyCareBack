import { IsString, IsDate } from 'class-validator';
export class CreateAppoimentDto {
    @IsString()
    category:string;
    @IsString()
    doctor:string;
    @IsDate()
    day:Date
    @IsString()
    hour:string;
    @IsString()
    minute:string;
}
