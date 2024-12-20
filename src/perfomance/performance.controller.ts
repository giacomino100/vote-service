import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { PerformanceDto } from './dto/performance.dto';
import { FromDtoToEntity } from './mapper/fromDtoToEntity.mapper';

@Controller('performance')
export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) {}

  @Post()
  create(@Body(new ValidationPipe()) body: PerformanceDto) {
    return this.performanceService.create(FromDtoToEntity(body));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.performanceService.findOne(id);
  }

  @Get()
  findAll() {
    return this.performanceService.findAll();
  }
}
