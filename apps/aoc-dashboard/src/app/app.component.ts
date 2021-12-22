import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AocResponse } from '@aoc-dashboard/api-interfaces';
import { map, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'aoc-dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<AocResponse>('/api/hello').pipe(shareReplay());
  members$: any = this.hello$.pipe(
    map((data) => {
      return Object.keys(data.members)
        .map((key) => data.members[key])
        .sort((a, b) => {
          return b.stars - a.stars;
        })
        .map((member) => {
          (member as any).starList = Array(25).fill(0);
          Object.keys(member.completion_day_level).forEach((key) => {
            if (member.completion_day_level[key]['2']) {
              (member as any).starList[+key - 1] = 2;
            } else {
              (member as any).starList[+key - 1] = 1;
            }
          });
          return member;
        });
    }),
    tap((data) => console.log(data))
  );

  constructor(private http: HttpClient) {}
}
