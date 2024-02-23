import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassCheckComponent } from './pass-check/pass-check.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './password.component';
import { InputComponent } from './input/input.component';
import { ColorSectionsComponent } from './color-sections/color-sections.component';
import { ControlValueAccessorDirective } from './control-value-accessor.directive';

@NgModule({
  declarations: [	
    PassCheckComponent,
    PasswordComponent,
    InputComponent,
    ColorSectionsComponent,
      ControlValueAccessorDirective
   ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    PassCheckComponent,
    PasswordComponent,
    InputComponent,
    ColorSectionsComponent,
  ],
})
export class PasswordModule {}
