import { Module } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { ProfesoresController } from './profesores.controller';
import { Profesor } from './entity/profesor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor])],
  providers: [ProfesoresService],
  controllers: [ProfesoresController]
})
export class ProfesoresModule {}
