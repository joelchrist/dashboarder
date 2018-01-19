import { TestBed, async } from '@angular/core/testing';
import { DashboarderComponent } from './dashboarder.component';
describe('DashboarderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboarderComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(DashboarderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
