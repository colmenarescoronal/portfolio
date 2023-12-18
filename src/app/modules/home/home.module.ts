import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ButtonImageComponent } from './components/button-image/button-image.component';
import { RickAndMortyScreenComponent } from './components/rick-and-morty-screen/rick-and-morty-screen.component';
import { RickAndMortyCharacterComponent } from './components/rick-and-morty-character/rick-and-morty-character.component';
import { DialogRickAndMortyCharacterDetailsComponent } from './components/dialog-rick-and-morty-character-details/dialog-rick-and-morty-character-details.component';
import { DeveloperInformationComponent } from './components/developer-information/developer-information.component';
import { TerminalComponent } from './components/terminal/terminal.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ButtonImageComponent,
    RickAndMortyScreenComponent,
    RickAndMortyCharacterComponent,
    DialogRickAndMortyCharacterDetailsComponent,
    DeveloperInformationComponent,
    TerminalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule { }
