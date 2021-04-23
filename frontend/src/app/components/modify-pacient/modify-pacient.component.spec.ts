import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPacientComponent } from './modify-pacient.component';

describe('ModifyPacientComponent', () => {
  let component: ModifyPacientComponent;
  let fixture: ComponentFixture<ModifyPacientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPacientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPacientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
