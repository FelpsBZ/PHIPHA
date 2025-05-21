import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
export declare class TeamsController {
    private readonly teamsService;
    constructor(teamsService: TeamsService);
    create(createTeamDto: CreateTeamDto): Promise<import("./entities/team.entity").Team>;
    findAll(): Promise<import("./entities/team.entity").Team[]>;
    findOne(id: string): Promise<import("./entities/team.entity").Team | null>;
    update(id: string, updateTeamDto: UpdateTeamDto): Promise<import("./entities/team.entity").Team | null>;
    remove(id: string): Promise<import("./entities/team.entity").Team | null>;
}
