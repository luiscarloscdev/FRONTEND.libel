import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosLiveComponent } from './cursos-live.component';

describe('CursosLiveComponent', () => {
  let component: CursosLiveComponent;
  let fixture: ComponentFixture<CursosLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
