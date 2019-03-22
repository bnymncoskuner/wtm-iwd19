import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameDialogComponent } from './username-dialog.component';

describe('UsernameDialogComponent', () => {
  let component: UsernameDialogComponent;
  let fixture: ComponentFixture<UsernameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
