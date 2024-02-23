import { Directive, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

type OnChangeFn<T> = (value: T) => void;
type OnTouchFn = () => void;

@Directive({
  selector: '[appControlValueAccessor]',
})
export class ControlValueAccessorDirective
  implements ControlValueAccessor, OnInit
{
  control = new FormControl();
  onChange!: OnChangeFn<string>;
  onTouched!: OnTouchFn;

  constructor() {}

  ngOnInit(): void {
    this.control.valueChanges.subscribe((val: string) => {
      if (this.onChange) {
        this.onChange(val);
      }
    });
  }

  writeValue(value: string): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: OnChangeFn<string>): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: OnTouchFn) {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
