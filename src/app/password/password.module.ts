import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassCheckComponent } from './pass-check/pass-check.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PassCheckComponent],
  imports: [CommonModule, FormsModule],
  exports: [PassCheckComponent],
})
export class PasswordModule {}
