import { Component, Input, OnChanges } from '@angular/core';
import { PasswordCheckService } from '../../services/password-check.service';

@Component({
  selector: 'app-color-sections',
  templateUrl: './color-sections.component.html',
  styleUrls: ['./color-sections.component.css'],
})
export class ColorSectionsComponent implements OnChanges {
  passwordStrength: string = '';
  @Input() password: string = '';

  constructor(private passwordCheckService: PasswordCheckService) {}

  ngOnChanges() {
    this.passwordStrength = this.passwordCheckService.checkPasswordStrength(
      this.password
    );
  }
}
