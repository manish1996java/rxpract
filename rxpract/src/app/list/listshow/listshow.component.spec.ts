import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListshowComponent } from './listshow.component';

describe('ListshowComponent', () => {
  let component: ListshowComponent;
  let fixture: ComponentFixture<ListshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
