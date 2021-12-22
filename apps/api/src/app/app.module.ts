import { CacheModule, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      ttl: 60 * 15, // 15 Minutes
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
