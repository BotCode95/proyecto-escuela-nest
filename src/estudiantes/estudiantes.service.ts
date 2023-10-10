import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entity/estudiante.entity'
@Injectable()
export class EstudiantesService {
    constructor(
        @InjectRepository(Estudiante)
        private estudiantesRepository: Repository<Estudiante>,
      ) {}
    
      estudiantes(): Promise<Estudiante[]> {
        return this.estudiantesRepository.find();
      }
    
      estudianteById(id: number): Promise<Estudiante> {
        return this.estudiantesRepository.findOne({ where: { id } });
      }
}
