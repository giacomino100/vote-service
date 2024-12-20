import { IsString } from 'class-validator';

export class PerformanceDto {
  @IsString()
  id?: string;

  @IsString()
  name: string;
}
