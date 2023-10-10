import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './entity/profesor.entity'
@Injectable()
export class ProfesoresService {
    constructor(
        @InjectRepository(Profesor)
        private profesoresRepository: Repository<Profesor>,
      ) {}
    
      profesores(): Promise<Profesor[]> {
        return this.profesoresRepository.find();
      }
    
      profesorById(id: number): Promise<Profesor> {
        return this.profesoresRepository.findOne({ where: { id } });
      }
}
