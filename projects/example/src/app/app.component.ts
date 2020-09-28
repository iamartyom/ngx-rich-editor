import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = "<b>this is a test text</b><br><u>second line</u><br><br><pre>test</pre>";
}
