import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesManagerComponent } from './tiles-manager.component';

describe('TilesManagerComponent', () => {
  let component: TilesManagerComponent;
  let fixture: ComponentFixture<TilesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
