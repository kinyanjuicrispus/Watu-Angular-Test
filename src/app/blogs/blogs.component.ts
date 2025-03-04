import { Component, OnInit } from '@angular/core';
import { SpaceflightNewsService } from '../spaceflight-news.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  standalone: false, 
})
export class BlogsComponent implements OnInit {
  blogs: any[] = [];
  limit: number = 10;

  constructor(private newsService: SpaceflightNewsService) {}

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.newsService.getBlogs(this.limit).subscribe((data: any) => {
      this.blogs = data.results;
    });
  }

  applyFilter(): void {
    this.loadBlogs();
  }
}