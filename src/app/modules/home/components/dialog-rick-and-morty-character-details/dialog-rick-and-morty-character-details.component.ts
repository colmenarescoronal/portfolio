import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-rick-and-morty-character-details',
  templateUrl: './dialog-rick-and-morty-character-details.component.html',
  styleUrls: ['./dialog-rick-and-morty-character-details.component.scss']
})
export class DialogRickAndMortyCharacterDetailsComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<DialogRickAndMortyCharacterDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {}

  closeThisDialog(){
    try{
      this.matDialogRef.close();
    }
    catch(error){
      console.log(error);
    }
  }

}
