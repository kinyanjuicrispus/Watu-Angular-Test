import { Component, OnInit } from '@angular/core';
import { SpaceflightNewsService } from '../spaceflight-news.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  standalone: false, 
})
export class ReportsComponent implements OnInit {
  reports: any[] = [];
  limit: number = 10;

  constructor(private newsService: SpaceflightNewsService) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.newsService.getArticles(this.limit).subscribe((data: any) => {
      this.reports = data.results;
    });
  }

  applyFilter(): void {
    this.loadReports();
  }
}