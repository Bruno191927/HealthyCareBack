import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Appoiment extends Document{
    @Prop({ type: String })
    category:string;
    @Prop({ type: String })
    doctor:string;
    @Prop({ type:Date , default:Date.now })
    day:Date;
    @Prop({ type: String })
    hour:string;
    @Prop({ type: String })
    minute:string;
}

export const AppoimentSchema = SchemaFactory.createForClass(Appoiment);