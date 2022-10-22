import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Auth extends Document{
    @Prop({ unique: true, type: String})
    email:string;
    @Prop({ type: String })
    name:string;
    @Prop({ type: String , default:'--'})
    lastName:string;
    @Prop({ type: String })
    password:string
    @Prop({ unique: true, type:Number,length: 8, default:'--------'})
    dni:string
    @Prop({ type: String , default:'--'})
    urlLink:string
    @Prop({ type: String, default:'--' })
    urlId:string
    @Prop({ type:Date , default:Date.now })
    createdAt:Date
    @Prop({ type:Date , default:Date.now })
    updatedAt:Date
}

export const AuthSchema = SchemaFactory.createForClass(Auth);