import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-image',
  templateUrl: './button-image.component.html',
  styleUrls: ['./button-image.component.scss']
})
export class ButtonImageComponent implements OnInit {

  @Input() image: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
