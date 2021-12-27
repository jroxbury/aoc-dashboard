import { CacheModule, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      ttl: 60 * 15, // 15 Minutes
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'aoc-dashboard'),
      exclude: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
