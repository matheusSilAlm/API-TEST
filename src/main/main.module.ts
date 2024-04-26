import { MainController } from "./main.controller";
import { Module } from "@nestjs/common";

@Module({
    controllers: [MainController],

})

export class MainModule{}