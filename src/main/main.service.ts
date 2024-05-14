import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { mainDTO } from "./Components/dto/main.dto";
import { Main } from "./schemas/main.schema.mongoo";
import { Repository } from "typeorm";
import { Model } from "mongoose";


@Injectable()
export class MainService {
    constructor(@InjectModel(Main.name) private readonly mainModel: Model<Main>) {}


    findAll(): Promise<Main[]> {
        return this.mainModel.find();
    }
    

    async create(mainDTO: mainDTO): Promise<Main> {
        const createdMain = new this.mainModel(mainDTO);
        return createdMain.save();
    }
}
