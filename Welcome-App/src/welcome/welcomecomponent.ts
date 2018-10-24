import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: '../welcome/welcomecomponent.html',
  styleUrls: ['../welcome/welcomecomponent.css']
})
export class WelcomeComponent {
  welcome = 'Welcome in Angular 6';
  math=5+7;

}