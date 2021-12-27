import { AocResponse } from '@aoc-dashboard/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('aoc-json')
  getData(): Observable<AocResponse> {
    return this.appService.getData();
  }
}
