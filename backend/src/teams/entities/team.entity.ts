import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_teams')
export class Team {
    @PrimaryGeneratedColumn({ name: 'id_team' })
    id_team: number;

    @Column()
    name_team: string;

    @Column()
    group_team: string;

    @Column()
    defense: number;

    @Column()
    attack: number;

    @Column({ default: 0 })
    points: number;
}
