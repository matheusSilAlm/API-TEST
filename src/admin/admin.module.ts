import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { adminEntity } from "./admin.entity";
import { AdminService } from "./admin.service";
import { adminController } from "./admin.controller";


@Module({
    imports: [TypeOrmModule.forFeature([adminEntity])],
    exports: [TypeOrmModule],
    providers: [AdminService],
    controllers: [adminController]
})
    

export class AdminModule{}
