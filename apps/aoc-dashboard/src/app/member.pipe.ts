import { Pipe, PipeTransform } from '@angular/core';
import { AocResponse, Member } from '@aoc-dashboard/api-interfaces';

@Pipe({
  name: 'member',
})
export class MemberPipe implements PipeTransform {
  transform(data: AocResponse): Member[] {
    return Object.keys(data.members)
      .map((key) => data.members[key])
      .sort((a, b) => {
        return b.stars - a.stars;
      })
      .map((member) => {
        member.starList = Array(25).fill(0);
        Object.keys(member.completion_day_level).forEach((key) => {
          if (member.completion_day_level[key]['2']) {
            member.starList[+key - 1] = 2;
          } else {
            member.starList[+key - 1] = 1;
          }
        });
        return member;
      });
  }
}
