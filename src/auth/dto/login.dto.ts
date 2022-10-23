import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class LoginDto {
    @ApiProperty({example:'test@test.com'})
    @IsEmail()
    email:string
    @ApiProperty({example:'MyPassword123'})
    @IsString()
    @MinLength(8)
    password:string
}