import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmniPortalComponent } from './almni-portal.component';

describe('AlmniPortalComponent', () => {
  let component: AlmniPortalComponent;
  let fixture: ComponentFixture<AlmniPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmniPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmniPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
