import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Main extends Document {
  @Prop()
  name: string;

  @Prop()
  agr: number;
}

export const MainSchema = SchemaFactory.createForClass(Main);
