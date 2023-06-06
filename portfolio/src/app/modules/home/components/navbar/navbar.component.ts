import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public mortyAvatar: string = '';

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.getMortyImage();
  }

  async getMortyImage(){
    try{
      const character = await lastValueFrom(this.mainService.getMain('https://rickandmortyapi.com/api/character/2'));
      const image = character?.image;
      this.mortyAvatar = image;
    }
    catch(error){
      console.log(error);
    }
  }

}
