import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AocResponse } from '@aoc-dashboard/api-interfaces';

@Component({
  selector: 'aoc-dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  vm$ = this.http.get<AocResponse>('/api/aoc-json');

  constructor(private http: HttpClient) {}
}
