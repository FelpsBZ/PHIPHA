import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';
export declare class TeamsService {
    private readonly repository;
    constructor(repository: Repository<Team>);
    create(dto: CreateTeamDto): Promise<Team>;
    findAll(): Promise<Team[]>;
    findOne(id: number): Promise<Team | null>;
    update(id: number, updateTeamDto: UpdateTeamDto): Promise<Team | null>;
    remove(id: number): Promise<Team | null>;
}
