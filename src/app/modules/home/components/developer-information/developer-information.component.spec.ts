import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperInformationComponent } from './developer-information.component';

describe('DeveloperInformationComponent', () => {
  let component: DeveloperInformationComponent;
  let fixture: ComponentFixture<DeveloperInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
