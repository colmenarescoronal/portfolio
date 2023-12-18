import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-information',
  templateUrl: './developer-information.component.html',
  styleUrls: ['./developer-information.component.scss']
})
export class DeveloperInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadCV(url:string){
    window.open(url);
  }

}
