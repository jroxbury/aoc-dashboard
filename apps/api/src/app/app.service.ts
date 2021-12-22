import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { from, map, Observable, of, switchMap, tap } from 'rxjs';
import { AocResponse } from '@aoc-dashboard/api-interfaces';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  private readonly cache_key = 'aoc-data';

  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}
  getData(): Observable<AocResponse> {
    return from(this.cacheManager.get(this.cache_key)).pipe(
      switchMap((isCached: AocResponse | undefined) => {
        if (!isCached) {
          return this.httpService
            .get(
              'https://adventofcode.com/2021/leaderboard/private/view/766287.json',
              {
                responseType: 'json',
                headers: {
                  Accept: 'application/json',
                  cookie: '',
                },
              }
            )
            .pipe(
              map((res) => res.data),
              tap((res) => {
                this.cacheManager.set(this.cache_key, res);
              })
            );
        }
        return of(isCached);
      })
    );
  }
}
