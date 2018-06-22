import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitsComponent } from './lits.component';

describe('LitsComponent', () => {
  let component: LitsComponent;
  let fixture: ComponentFixture<LitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
