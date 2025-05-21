import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisponibilidadeProfessoresService } from './disponibilidade-professores.service';
import { CreateDisponibilidadeProfessoreDto } from './dto/create-disponibilidade-professore.dto';
import { UpdateDisponibilidadeProfessoreDto } from './dto/update-disponibilidade-professore.dto';

@Controller('disponibilidade-professores')
export class DisponibilidadeProfessoresController {
  constructor(private readonly disponibilidadeProfessoresService: DisponibilidadeProfessoresService) {}

  @Post()
  create(@Body() createDisponibilidadeProfessoreDto: CreateDisponibilidadeProfessoreDto) {
    return this.disponibilidadeProfessoresService.create(createDisponibilidadeProfessoreDto);
  }

  @Get()
  findAll() {
    return this.disponibilidadeProfessoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disponibilidadeProfessoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDisponibilidadeProfessoreDto: UpdateDisponibilidadeProfessoreDto) {
    return this.disponibilidadeProfessoresService.update(+id, updateDisponibilidadeProfessoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disponibilidadeProfessoresService.remove(+id);
  }
}
