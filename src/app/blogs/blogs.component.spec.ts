import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogsComponent } from './blogs.component';
import { SpaceflightNewsService } from '../spaceflight-news.service';
import { provideHttpClient } from '@angular/common/http';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [], // No need for HttpClientTestingModule
      providers: [SpaceflightNewsService, provideHttpClient()], 
    }).compileComponents();

    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
