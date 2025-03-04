import { Component, OnInit } from '@angular/core';
import { SpaceflightNewsService } from '../spaceflight-news.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./reports.component.css'],
  standalone: true,
})
export class ReportsComponent implements OnInit {
  reports: any[] = [];
  limit: number = 10;

  constructor(private newsService: SpaceflightNewsService) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.newsService.getReports(this.limit).subscribe((data: any) => {
      this.reports = data.results;
    });
  }

  applyFilter(): void {
    this.loadReports();
  }
}