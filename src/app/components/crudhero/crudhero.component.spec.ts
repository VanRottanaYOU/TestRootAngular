import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudheroComponent } from './crudhero.component';

describe('CrudheroComponent', () => {
  let component: CrudheroComponent;
  let fixture: ComponentFixture<CrudheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
