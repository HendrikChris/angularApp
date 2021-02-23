import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  a = 0;
  b = 0;

  item = [
    {nama : "Jeruk", harga : "10000"},
    {nama : "Apel", harga : "15000"}
  ]

  tampil = true
}
