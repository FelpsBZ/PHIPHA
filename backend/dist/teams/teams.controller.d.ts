import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
export declare class TeamsController {
    private readonly teamsService;
    constructor(teamsService: TeamsService);
    create(createTeamDto: CreateTeamDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTeamDto: UpdateTeamDto): string;
    remove(id: string): string;
}
