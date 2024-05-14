import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainModule} from './main/main.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { adminEntity } from './admin/admin.entity';
// import { ValidateHeadersMiddleware } from './validade-middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal:true,
  }),
  MongooseModule.forRoot(process.env.DB_MONGO_URI),

  TypeOrmModule.forRoot({
    type: 'mysql',
    url: process.env.DB_MYSQL_URI,
    synchronize: false, // ESSA PARADA TEM QUE TA FALSO SE NÃO O TYPE ORM VAI TENTAR CRIAR AUTOMATICAMENTE TABLE NO BANCO DE DADOS COM BASE NA ENTIDADE KKK Q PARADA 
    autoLoadEntities: true, 
    // host: "127.0.0.1",
    // port: 3306,
    // username: 'root',
    // password: 'fnt123',
    // database: 'db_bondeEntreprise',
    // // entities: [adminEntity]
  
  }),

    MainModule,
    AdminModule
  ],
    
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//       consumer.apply(ValidateHeadersMiddleware).forRoutes('*')
//   }
// }

