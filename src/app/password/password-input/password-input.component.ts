import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PasswordCheckService } from '../../services/password-check.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
})
export class PasswordInputComponent implements OnInit {
  password: string = '';

  @Output() passwordChange = new EventEmitter<string>();

  constructor(private passwordCheckService: PasswordCheckService) {}

  ngOnInit() {}

  onChange() {
    const strength = this.passwordCheckService.checkPasswordStrength(
      this.password
    );
    this.passwordChange.emit(strength);
  }
}
