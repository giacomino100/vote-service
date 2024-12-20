import { Injectable } from '@nestjs/common';
import { PerformanceEntity } from './entities/performance.entity';

@Injectable()
export class PerformanceService {
  create(body: PerformanceEntity) {
    return body;
  }

  findOne(id: string) {
    return id;
  }

  findAll() {
    return [];
  }
}
