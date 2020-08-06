import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMarkerModalComponent } from './create-marker-modal.component';

describe('CreateMarkerModalComponent', () => {
  let component: CreateMarkerModalComponent;
  let fixture: ComponentFixture<CreateMarkerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMarkerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMarkerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
