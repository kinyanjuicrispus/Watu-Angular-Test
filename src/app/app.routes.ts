import { Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ReportsComponent } from './reports/reports.component';

export const routes: Routes = [  { path: 'articles', component: ArticlesComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },];
