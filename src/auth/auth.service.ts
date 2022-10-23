import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from './entities/auth.entity';
import { Model } from 'mongoose';
import { TokenResponseDto } from './dto/token-response.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

  constructor(
    @InjectModel(Auth.name)
    private readonly authModel: Model<Auth>,
    private jwtService: JwtService
  ){}


  async create(createUserDto: CreateUserDto){
    let existAccount = await this.findOne(createUserDto.email);
    if(existAccount){
      throw new BadRequestException(`Esta email ya esta en uso`);
    }
    else{
      createUserDto.password = bcrypt.hashSync(createUserDto.password,10)
      const newUser = await this.authModel.create(createUserDto)
      const payload = {id:newUser._id};
      let accessToken:TokenResponseDto = {
        token:this.jwtService.sign(payload),
        expiredIn:"5444445445465465465"
      }
      return accessToken;
    }
  }

  async login(loginDto: LoginDto){
    let existAccount = await this.findOne(loginDto.email);
    const comparePassword = await bcrypt.compare(loginDto.password,existAccount.password)
    if(existAccount && comparePassword){
      const payload = {id:existAccount._id};
      let accessToken:TokenResponseDto = {
        token:this.jwtService.sign(payload),
        expiredIn:"5444445445465465465"
      }
      return accessToken;
    }
    else{
      throw new BadRequestException(`Email o contraseña invalidos`);
    }
  }

  async validateUser(loginDto: LoginDto): Promise<any> {
    const user = await this.findOne(loginDto.email);
    const comparePassword = await bcrypt.compare(loginDto.password,user.password)
    if (user && comparePassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginData(loginDto: LoginDto) {
    let existAccount = await this.findOne(loginDto.email);
    if(existAccount && existAccount.password === loginDto.password){
      const payload = {id:existAccount._id};
      let accessToken:TokenResponseDto = {
        token:this.jwtService.sign(payload),
        expiredIn:"5444445445465465465"
      }
      return accessToken;
    }
    else{
      throw new BadRequestException(`Email o contraseña invalidos`);
    }
  }

  async findAll() {
    return `This action returns all auth`;
  }

  async findOne(email:string) {
    let auth:Auth;

    auth = await this.authModel.findOne({
      email:email.toLocaleLowerCase().trim()
    });

    return auth;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

}
