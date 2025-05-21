import { IsNumber, IsString } from "class-validator";

export class CreateTeamDto {

    @IsString()
    name_team: string;

    @IsString()
    group_team: string;

    @IsNumber()
    defense: number;

    @IsNumber()
    attack: number;

    @IsNumber()
    points: number;
}
