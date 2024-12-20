import { Controller, Get, Post } from '@nestjs/common';
import { VoteService } from './vote.service';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Get()
  getAll() {
    return this.voteService.getAll();
  }

  @Post()
  create() {}
}
