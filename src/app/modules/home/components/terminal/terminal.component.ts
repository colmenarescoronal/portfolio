import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  public card: any = {
    cardTitle: '',
    cardSubTitle: '',
    paragraph1: '',
    paragraph2: ''
  }

  public pointerTitle: boolean = false;
  public pointerSubTitle: boolean = false;
  public pointerParagraph1: boolean = false;
  public pointerParagraph2: boolean = false;

  private WRITING_SPEED_MS = 100;

  constructor() { }

  ngOnInit(): void {
    this.writeCode();
  }

  async deleteText(field: string){
    while(this.card[field].length > 0){
      this.card[field] = this.card[field].substring(0,this.card[field].length - 1);
      await this.sleep(this.WRITING_SPEED_MS);
    }
    await this.sleep(1000);
    return true;
  }

  async writeText(field:string,text:string){
    const textLength = text.length;
    while(this.card[field].length !== textLength){
      this.card[field] += text.substring(0,1);
      text = text.substring(1, text.length);
      await this.sleep(this.WRITING_SPEED_MS);
    }
    await this.sleep(1000);
    return true;
  }


  sleep(milliseconds: number){
    return new Promise((resolve)=>{
      setTimeout(()=>resolve(true),milliseconds)
    });
  }

  async writeCode(){
   this.pointerTitle = true;
   await this.sleep(1000)
   await this.deleteText('cardTitle');
   await this.writeText('cardTitle','Luis Guillermo Colmenares');
   this.pointerTitle = false;
   this.pointerSubTitle = true;
   await this.deleteText('cardSubTitle');
   await this.writeText('cardSubTitle','Fullstack developer');
   this.pointerSubTitle = false;
   this.pointerParagraph1 = true;
   await this.deleteText('paragraph1');
   await this.writeText('paragraph1','I went from machine support to programmer and now I enjoy my profession much more.');
   this.pointerParagraph1 = false;
   this.pointerParagraph2 = true;
   await this.deleteText('paragraph2');
   await this.writeText('paragraph2','When I\'m not coding I like to spend my time playing guitar, eating delicious food and with the people I love ♥️.');
   this.pointerParagraph2 = false;
  }

}
