import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInvitationComponent } from './client-invitation.component';

describe('ClientInvitationComponent', () => {
  let component: ClientInvitationComponent;
  let fixture: ComponentFixture<ClientInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
