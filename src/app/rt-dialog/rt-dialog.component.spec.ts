import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtDialogComponent } from './rt-dialog.component';

describe('RtDialogComponent', () => {
  let component: RtDialogComponent;
  let fixture: ComponentFixture<RtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
