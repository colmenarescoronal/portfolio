import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRickAndMortyCharacterDetailsComponent } from './dialog-rick-and-morty-character-details.component';

describe('DialogRickAndMortyCharacterDetailsComponent', () => {
  let component: DialogRickAndMortyCharacterDetailsComponent;
  let fixture: ComponentFixture<DialogRickAndMortyCharacterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRickAndMortyCharacterDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRickAndMortyCharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
