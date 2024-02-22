import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-sections',
  templateUrl: './color-sections.component.html',
  styleUrls: ['./color-sections.component.css'],
})
export class ColorSectionsComponent implements OnInit {
  @Input() passwordStrength: string = '';

  constructor() {}

  ngOnInit() {}
}
