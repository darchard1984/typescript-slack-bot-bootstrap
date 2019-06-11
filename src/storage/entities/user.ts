import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: "varchar",
        length: 100
    })
    username:string;

    @Column({
        type: "varchar",
        length: 100
    })
    first: string;

    @Column({
        type: "varchar",
        length: 100
    })
    last: string;

    @Column("int")
    team_id:number;

    @Column({
        type: "boolean"
    })
    is_active:boolean;

    @Column({
        type: "varchar",
        length: 100
    })
    email:string;
}