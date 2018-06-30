import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-basic-animation',
  templateUrl: './basic-animation.component.html',
  styleUrls: ['./basic-animation.component.css'],
  animations: [
    trigger('basicAnimation', [
      state(
        'normal',
        style({
          'font-size': '30px',
          color: 'green'
        })
      ),
      state(
        'large',
        style({
          'font-size': '80px',
          color: 'red'
        })
      ),
      //transition('normal => large', animate('2s')),
      //transition('large => normal', animate(700))
      transition('normal <=> large', animate('1s'))
    ])
  ]
})
export class BasicAnimationComponent implements OnInit {
  currentState: string = 'large';
  constructor() {}

  ngOnInit() {}

  onToggleState() {
    this.currentState = this.currentState === 'normal' ? 'large' : 'normal';
  }
}
