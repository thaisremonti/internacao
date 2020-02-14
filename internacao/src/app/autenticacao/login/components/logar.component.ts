import { Component, OnInit } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

beforeEach(() => {
  TestBed.configureTestingModule({ declarations: [ ], imports: [ RouterTestingModule ] })
})

@Component({
  template: `
    <router-outlet></router-outlet>
  `
})

export class LogarComponent {
}
