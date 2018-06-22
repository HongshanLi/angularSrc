import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadsOnPaperComponent } from './threads-on-paper.component';

describe('ThreadsOnPaperComponent', () => {
  let component: ThreadsOnPaperComponent;
  let fixture: ComponentFixture<ThreadsOnPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadsOnPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadsOnPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
