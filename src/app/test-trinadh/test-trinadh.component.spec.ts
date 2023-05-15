import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTrinadhComponent } from './test-trinadh.component';

describe('TestTrinadhComponent', () => {
  let component: TestTrinadhComponent;
  let fixture: ComponentFixture<TestTrinadhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTrinadhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTrinadhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
