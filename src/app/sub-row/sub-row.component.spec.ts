import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRowComponent } from './sub-row.component';

describe('SubRowComponent', () => {
  let component: SubRowComponent;
  let fixture: ComponentFixture<SubRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
