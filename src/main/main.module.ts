import { MongooseModule } from "@nestjs/mongoose";
import { MainController } from "./main.controller";
import { Module } from "@nestjs/common";
import { Main, MainSchema } from "./schemas/main.schema.mongoo";
import { MainService } from "./main.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Main.name, schema: MainSchema}]),
    ],
    controllers: [MainController],
    providers: [MainService],

})

export class MainModule{}