import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-check',
  templateUrl: './pass-check.component.html',
  styleUrls: ['./pass-check.component.css'],
})
export class PassCheckComponent implements OnInit {
  password: string = '';
  passwordStrength: string = '';

  constructor() {}

  ngOnInit() {}

  onPasswordChange(strength: string) {
    this.passwordStrength = strength;
  }
}
