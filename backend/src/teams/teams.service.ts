import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private readonly repository: Repository<Team>,
  ) {}


  create(dto: CreateTeamDto) {
    const team = this.repository.create(dto);
    console.log('This action adds a new team');
    return this.repository.save(team);
  }

  findAll() {
    console.log(`This action returns all teams`);
    return this.repository.find();
  }

  findOne(id: number) {
    console.log(`This action returns a #${id} team`)
    return this.repository.findOneBy({ "id_team": id });
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    console.log(`This action updates a #${id} team`);
    const team = await this.repository.findOneBy({ "id_team": id });
    if(!team) return null;
    this.repository.merge(team, updateTeamDto);
    return this.repository.save(team);
  }

  async remove(id: number) {
    console.log(`This action removes a #${id} team`);
    const team = await this.repository.findOneBy({ "id_team": id });
    if(!team) return null;
   
    return this.repository.remove(team);
  }
}
