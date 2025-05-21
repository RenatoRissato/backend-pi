import { Injectable } from '@nestjs/common';
import { CreateDisponibilidadeProfessoreDto } from './dto/create-disponibilidade-professore.dto';
import { UpdateDisponibilidadeProfessoreDto } from './dto/update-disponibilidade-professore.dto';

@Injectable()
export class DisponibilidadeProfessoresService {
  create(createDisponibilidadeProfessoreDto: CreateDisponibilidadeProfessoreDto) {
    return 'This action adds a new disponibilidadeProfessore';
  }

  findAll() {
    return `This action returns all disponibilidadeProfessores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} disponibilidadeProfessore`;
  }

  update(id: number, updateDisponibilidadeProfessoreDto: UpdateDisponibilidadeProfessoreDto) {
    return `This action updates a #${id} disponibilidadeProfessore`;
  }

  remove(id: number) {
    return `This action removes a #${id} disponibilidadeProfessore`;
  }
}
