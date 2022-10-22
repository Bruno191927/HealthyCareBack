import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppoimentService } from './appoiment.service';
import { CreateAppoimentDto } from './dto/create-appoiment.dto';
import { UpdateAppoimentDto } from './dto/update-appoiment.dto';

@Controller('appoiment')
@ApiTags('Appoiment')
export class AppoimentController {
  constructor(private readonly appoimentService: AppoimentService) {}

  @Post()
  create(@Body() createAppoimentDto: CreateAppoimentDto) {
    return this.appoimentService.create(createAppoimentDto);
  }

  @Get()
  findAll() {
    return this.appoimentService.findAll();
  }
}
