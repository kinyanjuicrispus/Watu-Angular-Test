import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpaceflightNewsService {
  private apiUrl = 'https://api.spaceflightnewsapi.net/v4';

  constructor(private http: HttpClient) {}

  getArticles(limit: number = 10): Observable<any> {
    return this.http.get(`${this.apiUrl}/articles/?limit=${limit}`);
  }

  getBlogs(limit: number = 10): Observable<any> {
    return this.http.get(`${this.apiUrl}/blogs/?limit=${limit}`);
  }

  getReports(limit: number = 10): Observable<any> {
    return this.http.get(`${this.apiUrl}/reports/?limit=${limit}`);
  }
}