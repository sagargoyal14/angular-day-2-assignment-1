import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval : any;

  @Output() intervalEmitter = new EventEmitter<number>();

  num:number = 0;

  onStart(){
    this.interval = setInterval(() =>{ 
      this.num++;
      this.intervalEmitter.emit(this.num);
     },1000)
  }

  onPause(){
    clearInterval(this.interval)
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
