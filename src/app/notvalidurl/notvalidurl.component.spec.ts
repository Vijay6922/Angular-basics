import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotvalidurlComponent } from './notvalidurl.component';

describe('NotvalidurlComponent', () => {
  let component: NotvalidurlComponent;
  let fixture: ComponentFixture<NotvalidurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotvalidurlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotvalidurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
