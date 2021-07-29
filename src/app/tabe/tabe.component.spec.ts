import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabeComponent } from './tabe.component';

describe('TabeComponent', () => {
  let component: TabeComponent;
  let fixture: ComponentFixture<TabeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
