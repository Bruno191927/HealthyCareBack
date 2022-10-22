import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAppoimentDto } from './dto/create-appoiment.dto';
import { UpdateAppoimentDto } from './dto/update-appoiment.dto';
import { Appoiment } from './entities/appoiment.entity';

@Injectable()
export class AppoimentService {

  constructor(
    @InjectModel(Appoiment.name)
    private readonly appoimentModel: Model<Appoiment>,
  ){}

  async create(createAppoimentDto: CreateAppoimentDto) {
    const newAppoiment = await this.create(createAppoimentDto);
    return newAppoiment;
  }

  async findAll() {
    const appoimnets = await this.findAll();
    return appoimnets;
  }

  findOne(id: number) {
    return `This action returns a #${id} appoiment`;
  }

  update(id: number, updateAppoimentDto: UpdateAppoimentDto) {
    return `This action updates a #${id} appoiment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appoiment`;
  }
}
