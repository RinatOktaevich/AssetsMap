import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMarkerModalComponent } from './delete-marker-modal.component';

describe('DeleteMarkerModalComponent', () => {
  let component: DeleteMarkerModalComponent;
  let fixture: ComponentFixture<DeleteMarkerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMarkerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMarkerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
