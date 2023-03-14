import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtSidebarComponent } from './rt-sidebar.component';

describe('RtSidebarComponent', () => {
  let component: RtSidebarComponent;
  let fixture: ComponentFixture<RtSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
