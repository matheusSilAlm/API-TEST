import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainModule} from './main/main.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ValidateHeadersMiddleware } from './validade-middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal:true,
  }),
  MongooseModule.forRoot(process.env.DB_MONGO_URI),
    MainModule
  ],
      controllers: [AppController],
  providers: [AppService],
})

// export class AppModule {}

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(ValidateHeadersMiddleware).forRoutes('*')
  }
}

