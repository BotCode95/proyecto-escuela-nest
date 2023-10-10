import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { Estudiante } from './entity/estudiante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante])],
  providers: [EstudiantesService],
  controllers: [EstudiantesController]
})
export class EstudiantesModule {}
