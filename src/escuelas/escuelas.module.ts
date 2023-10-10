import { Module } from '@nestjs/common';
import { EscuelasService } from './escuelas.service';
import { EscuelasController } from './escuelas.controller';

@Module({
  providers: [EscuelasService],
  controllers: [EscuelasController]
})
export class EscuelasModule {}
