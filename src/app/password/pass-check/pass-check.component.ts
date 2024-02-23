import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pass-check',
  templateUrl: './pass-check.component.html',
  styleUrls: ['./pass-check.component.css'],
})
export class PassCheckComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password: '',
    });
  }
}
