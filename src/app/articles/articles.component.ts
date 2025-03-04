import { Component, OnInit } from '@angular/core';
import { SpaceflightNewsService } from '../spaceflight-news.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  standalone: false, 
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