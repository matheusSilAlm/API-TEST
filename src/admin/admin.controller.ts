import { Body, Controller, Get, Post } from "@nestjs/common";
import { AdminService } from "./admin.service";

@Controller('/admin')
export class adminController {
    constructor (private adminRepository: AdminService) {}

    @Post()
    async create(@Body() dadosAdmin){
    return await this.adminRepository.create(dadosAdmin);
    }

    @Get()
    async getAll(){
        return await this.adminRepository.findAll();
    }
}