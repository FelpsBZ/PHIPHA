import { IsNumber, IsString } from "class-validator";

export class CreateTeamDto {

    @IsString()
    nome: string;

    @IsString()
    grupo: string;

    @IsNumber()
    def: number;

    @IsNumber()
    ata: number;

    @IsNumber()
    pontos: number;
}
