import { Module } from '@nestjs/common';
import { DisponibilidadeProfessoresService } from './disponibilidade-professores.service';
import { DisponibilidadeProfessoresController } from './disponibilidade-professores.controller';

@Module({
  controllers: [DisponibilidadeProfessoresController],
  providers: [DisponibilidadeProfessoresService],
})
export class DisponibilidadeProfessoresModule {}
