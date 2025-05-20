import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GamesService {
    create(createGameDto: CreateGameDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGameDto: UpdateGameDto): string;
    remove(id: number): string;
}
