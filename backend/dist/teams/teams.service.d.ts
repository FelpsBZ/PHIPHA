import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
export declare class TeamsService {
    create(createTeamDto: CreateTeamDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTeamDto: UpdateTeamDto): string;
    remove(id: number): string;
}
