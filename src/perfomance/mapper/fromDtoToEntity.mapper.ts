import { PerformanceDto } from '../dto/performance.dto';

export function FromDtoToEntity(dto: PerformanceDto) {
  const perfomanceEntity = {
    id: dto.id,
    name: dto.name,
  };
  return perfomanceEntity;
}
