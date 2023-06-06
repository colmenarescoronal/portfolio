import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonImageComponent } from './button-image.component';

describe('ButtonImageComponent', () => {
  let component: ButtonImageComponent;
  let fixture: ComponentFixture<ButtonImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
