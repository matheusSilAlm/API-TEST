import { Body, Controller, Get, Post } from "@nestjs/common";
import { MainService } from "./main.service";
import { mainDTO } from "./Components/dto/main.dto";

@Controller('/main') 
    export class MainController{
        constructor(private mainRepository: MainService){}

        @Post()
        async create(@Body() dadosMain: mainDTO ) {
            return await this.mainRepository.create(dadosMain);
        }        

        
        @Get()
        async getAll() {
            return await this.mainRepository.findAll();
        }
        
    }
