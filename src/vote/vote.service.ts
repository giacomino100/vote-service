import { Injectable } from '@nestjs/common';

@Injectable()
export class VoteService {
  getAll() {
    return 'votes';
  }
}
