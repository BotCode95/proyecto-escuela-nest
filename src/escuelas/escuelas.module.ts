import { Module } from '@nestjs/common';
import { EscuelasService } from './escuelas.service';
import { EscuelasController } from './escuelas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escuela } from './entity/escuela.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Escuela])],
  providers: [EscuelasService],
  controllers: [EscuelasController]
})
export class EscuelasModule {}
