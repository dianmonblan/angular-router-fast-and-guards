import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctiveComponent } from './distinctive.component';

describe('DistinctiveComponent', () => {
  let component: DistinctiveComponent;
  let fixture: ComponentFixture<DistinctiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistinctiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
