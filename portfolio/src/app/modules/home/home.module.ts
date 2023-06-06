import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from 'modules/material.module';
import { ButtonImageComponent } from './components/button-image/button-image.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ButtonImageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule { }
