import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';

// beforeEach(() => {
//   TestBed.configureTestingModule({ declarations: [ ], imports: [ RouterTestingModule ] })
// })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'internacao';
}
