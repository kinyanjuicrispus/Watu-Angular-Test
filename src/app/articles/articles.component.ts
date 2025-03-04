import { Component, OnInit } from '@angular/core';
import { SpaceflightNewsService } from '../spaceflight-news.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./articles.component.css'],
  standalone: true,
})
export class ArticlesComponent implements OnInit {
  articles: any[] = [];
  limit: number = 10;

  constructor(private newsService: SpaceflightNewsService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.newsService.getArticles(this.limit).subscribe((data: any) => {
      this.articles = data.results;
    });
  }

  applyFilter(): void {
    this.loadArticles();
  }
}