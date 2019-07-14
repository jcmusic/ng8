import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired: EventEmitter<number> = new EventEmitter(); 
  timerStopped = true;
  elapsed: number = 0;
  timerId;

  constructor() { }

  ngOnInit() {
  }

  fnIncr(){
    this.elapsed++;
    this.intervalFired.emit(this.elapsed);
    console.log(this.elapsed);
  }
  startTimer(){
    console.log('Timer started.');
    this.timerStopped = false;
    this.elapsed = 0;
  
    this.timerId =
      setInterval(
        (
          function(){
            this.fnIncr();
          }
        ).bind(this), 1000);

    //********  This works too! ****/
    // this.timerId =
    //   setInterval(
    //     (
    //       function(){
    //         this.elapsed++;
    //         this.intervalFired.emit();
    //         console.log('Interval Fired: ' + this.elapsed);
    //         console.log(this.elapsed);
    //       }
    //     ).bind(this), 500);  // Don't forget to bind the outer scope for the closure.
 
  }
  stopTimer(){
    this.timerStopped = true;
    clearInterval(this.timerId);
    console.log('Timer stopped.');
  }
}
