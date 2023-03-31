import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMgmtComponent } from './account-mgmt.component';

describe('AccountMgmtComponent', () => {
  let component: AccountMgmtComponent;
  let fixture: ComponentFixture<AccountMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
