import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassCheckComponent } from './pass-check/pass-check.component';
import { FormsModule } from '@angular/forms';
import { PasswordComponent } from './password.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { ColorSectionsComponent } from './color-sections/color-sections.component';

@NgModule({
  declarations: [
    PassCheckComponent,
    PasswordComponent,
    PasswordInputComponent,
    ColorSectionsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    PassCheckComponent,
    PasswordComponent,
    PasswordInputComponent,
    ColorSectionsComponent,
  ],
})
export class PasswordModule {}
