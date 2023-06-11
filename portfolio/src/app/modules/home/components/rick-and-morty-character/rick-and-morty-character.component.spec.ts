import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyCharacterComponent } from './rick-and-morty-character.component';

describe('RickAndMortyCharacterComponent', () => {
  let component: RickAndMortyCharacterComponent;
  let fixture: ComponentFixture<RickAndMortyCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickAndMortyCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickAndMortyCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
