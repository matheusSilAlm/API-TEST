import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Administradores')
export class adminEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Nome: string;

    @Column()
    Email: string;
    
    @Column()
    Senha: string;
}