import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rick-and-morty-character',
  templateUrl: './rick-and-morty-character.component.html',
  styleUrls: ['./rick-and-morty-character.component.scss']
})
export class RickAndMortyCharacterComponent implements OnInit {

  @Input() character: any;

  constructor() { }

  ngOnInit(): void {
  }

}