import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  dni: string;

  @Prop({ required: true })
  birthdate: Date;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    required: true,
    type: MongooseSchema.Types.ObjectId,
    ref: 'TypeUser',
  })
  typeUser: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
