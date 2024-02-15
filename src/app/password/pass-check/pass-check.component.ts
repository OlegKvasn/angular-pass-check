import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-check',
  templateUrl: './pass-check.component.html',
  styleUrls: ['./pass-check.component.css'],
})
export class PassCheckComponent implements OnInit {
  password: string = '';
  passwordStrength: string = '';
  patternL: RegExp = /[a-zA-Z]/;
  patternD: RegExp = /[0-9]/;
  patternS: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  constructor() {}

  ngOnInit() {}

  checkPasswordStrength() {
    if (this.password.length === 0) {
      this.passwordStrength = '';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'short';
    } else if (
      this.patternL.test(this.password) &&
      this.patternD.test(this.password) &&
      this.patternS.test(this.password)
    ) {
      this.passwordStrength = 'strong';
    } else if (
      (this.patternL.test(this.password) &&
        this.patternD.test(this.password)) ||
      (this.patternL.test(this.password) &&
        this.patternS.test(this.password)) ||
      (this.patternD.test(this.password) && this.patternS.test(this.password))
    ) {
      this.passwordStrength = 'medium';
    } else {
      this.passwordStrength = 'weak';
    }
  }
}
