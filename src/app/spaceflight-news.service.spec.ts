import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SpaceflightNewsService } from './spaceflight-news.service';

describe('SpaceflightNewsService', () => {
  let service: SpaceflightNewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceflightNewsService],
    });
    service = TestBed.inject(SpaceflightNewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch articles', () => {
    const mockArticles = [{ title: 'Test Article', summary: 'Test Summary' }];

    service.getArticles().subscribe((articles) => {
      expect(articles.results).toEqual(mockArticles);
    });

    const req = httpMock.expectOne('https://api.spaceflightnewsapi.net/v4/articles/?limit=10');
    expect(req.request.method).toBe('GET');
    req.flush({ results: mockArticles });
  });

  it('should fetch blogs', () => {
    const mockBlogs = [{ title: 'Test Blog', summary: 'Test Summary' }];

    service.getBlogs().subscribe((blogs) => {
      expect(blogs.results).toEqual(mockBlogs);
    });

    const req = httpMock.expectOne('https://api.spaceflightnewsapi.net/v4/blogs/?limit=10');
    expect(req.request.method).toBe('GET');
    req.flush({ results: mockBlogs });
  });

  it('should fetch reports', () => {
    const mockReports = [{ title: 'Test Report', summary: 'Test Summary' }];

    service.getReports().subscribe((reports) => {
      expect(reports.results).toEqual(mockReports);
    });

    const req = httpMock.expectOne('https://api.spaceflightnewsapi.net/v4/reports/?limit=10');
    expect(req.request.method).toBe('GET');
    req.flush({ results: mockReports });
  });
});