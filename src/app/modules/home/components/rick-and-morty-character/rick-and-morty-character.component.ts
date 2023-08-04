import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogRickAndMortyCharacterDetailsComponent } from '../dialog-rick-and-morty-character-details/dialog-rick-and-morty-character-details.component';
@Component({
  selector: 'app-rick-and-morty-character',
  templateUrl: './rick-and-morty-character.component.html',
  styleUrls: ['./rick-and-morty-character.component.scss']
})
export class RickAndMortyCharacterComponent implements OnInit {

  @Input() character: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCharacterDetailsDialog() {
    try{
      const dialog = this.dialog.open(DialogRickAndMortyCharacterDetailsComponent,{
        width: '500px',
        height: 'auto',
        data: {
          character: this.character
        }
      });
    }
    catch(error){
      console.log(error);
    }
  }

}
