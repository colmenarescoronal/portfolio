import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { MainService } from 'src/app/core/services/main.service';
@Component({
  selector: 'app-rick-and-morty-screen',
  templateUrl: './rick-and-morty-screen.component.html',
  styleUrls: ['./rick-and-morty-screen.component.scss'],
})
export class RickAndMortyScreenComponent implements OnInit {
  constructor(private mainService: MainService) {}

  public characters: any[] = [];

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    lastValueFrom(
      this.mainService.getMain('https://rickandmortyapi.com/api/character')
    )
      .then((response) => {
        console.log(response);
        this.characters = response.results;
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
