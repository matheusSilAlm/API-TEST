import { Injectable } from "@nestjs/common";
import { adminEntity } from "./admin.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin, Repository } from "typeorm";
import { AdminDTO } from "./dto/cria.admin.dto";

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(adminEntity)
        private readonly adminRepository: Repository<adminEntity>
    ){}


    create(adm: AdminDTO): Promise<adminEntity> {
        return this.adminRepository.save(adm);
      }

    findAll(): Promise<adminEntity[]> {
        return this.adminRepository.find()
    } 
}