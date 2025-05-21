import { PartialType } from '@nestjs/swagger';
import { CreateDisponibilidadeProfessoreDto } from './create-disponibilidade-professore.dto';

export class UpdateDisponibilidadeProfessoreDto extends PartialType(CreateDisponibilidadeProfessoreDto) {}
