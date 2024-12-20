import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoteModule } from './vote/vote.module';
import { PerformanceModule } from './perfomance/performance.module';

@Module({
  imports: [VoteModule, PerformanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
