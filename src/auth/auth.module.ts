import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from './entities/auth.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
@Module({
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy],
  imports:[
    ConfigModule,
    PassportModule,
    MongooseModule.forFeature([
      {
        name:Auth.name,
        schema: AuthSchema
      }
    ]),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60000s' },
    })
  ],
})
export class AuthModule {}
