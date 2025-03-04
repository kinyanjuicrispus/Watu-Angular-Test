import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  activeTab: string = 'articles'; // Default active tab

  constructor(private router: Router) {}

  onTabChange(tab: string): void {
    this.activeTab = tab;
    this.router.navigate([tab]);
  }
}