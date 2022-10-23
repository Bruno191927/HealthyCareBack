import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
    @ApiProperty({example:'test@test.com'})
    @IsEmail()
    email:string
    @ApiProperty({example:'MyPassword123'})
    @IsString()
    @MinLength(8)
    password:string
    @ApiProperty({example:'Jhon Doe'})
    @IsString()
    @MinLength(3)
    name:string
    @ApiProperty({example:'10141213'})
    @IsString()
    @MinLength(8)
    dni:string
}
