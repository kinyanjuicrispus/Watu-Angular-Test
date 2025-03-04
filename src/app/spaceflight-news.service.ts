import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpaceflightNewsService {
  private readonly API_URL = 'https://api.spaceflightnewsapi.net/v4';

  constructor(private http: HttpClient) {} // ✅ Inject HttpClient directly

  private fetchData(endpoint: string, limit: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${endpoint}/?limit=${limit}`);
  }

  getArticles(limit: number = 10): Observable<any> {
    return this.fetchData('articles', limit);
  }

  getBlogs(limit: number = 10): Observable<any> {
    return this.fetchData('blogs', limit);
  }

  getReports(limit: number = 10): Observable<any> {
    return this.fetchData('reports', limit);
  }
}
