import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordCheckService {
  constructor() {}

  checkPasswordStrength(password: string) {
    const letterTest = (pass: string) => /[a-zA-Z]/.test(pass);
    const digitTest = (pass: string) => /[0-9]/.test(pass);
    const symbolTest = (pass: string) =>
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pass);
    const length = password.length;

    if (length === 0) return '';
    if (length < 8) return 'short';
    if (letterTest(password) && digitTest(password) && symbolTest(password))
      return 'strong';
    if (
      (letterTest(password) && digitTest(password)) ||
      (letterTest(password) && symbolTest(password)) ||
      (digitTest(password) && symbolTest(password))
    )
      return 'medium';

    return 'weak';
  }
}
