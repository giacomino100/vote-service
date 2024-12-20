import { Module } from '@nestjs/common';
import { PerformanceController } from './performance.controller';
import { PerformanceService } from './performance.service';

@Module({
  imports: [],
  controllers: [PerformanceController],
  providers: [PerformanceService],
})
export class PerformanceModule {}
