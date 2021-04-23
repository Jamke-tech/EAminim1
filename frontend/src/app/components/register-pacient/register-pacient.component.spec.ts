import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPacientComponent } from './register-pacient.component';

describe('RegisterPacientComponent', () => {
  let component: RegisterPacientComponent;
  let fixture: ComponentFixture<RegisterPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
