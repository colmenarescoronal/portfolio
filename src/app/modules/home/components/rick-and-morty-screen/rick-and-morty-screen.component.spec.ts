import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyScreenComponent } from './rick-and-morty-screen.component';

describe('RickAndMortyScreenComponent', () => {
  let component: RickAndMortyScreenComponent;
  let fixture: ComponentFixture<RickAndMortyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickAndMortyScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickAndMortyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
