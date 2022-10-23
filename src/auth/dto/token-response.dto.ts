import { ApiProperty } from '@nestjs/swagger';
export class TokenResponseDto {
    @ApiProperty({example:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTNkNTcxMTljMWZjMTBiNDQyYTQwMSIsImlhdCI6MTY2NjQzODYyMSwiZXhwIjoxNjY2NDk4NjIxfQ.cxoRag0tP2VdlTULj7l9Ovcokz994URcHLDE43S9O0w'})
    token:string
    @ApiProperty({example:'5444445445465465465'})
    expiredIn:string
}