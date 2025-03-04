import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  activeTab: string = 'articles'; // Default active tab

  constructor(private router: Router) {}

  onTabChange(tab: string): void {
    this.activeTab = tab;
    this.router.navigate([tab]);
  }
}