import { Controller, Get } from "@nestjs/common";

@Controller('/main') 
    export class MainController{
        
        @Get()
        findAll(): string{
            return 'Retonar alguma string';
        }
    }
