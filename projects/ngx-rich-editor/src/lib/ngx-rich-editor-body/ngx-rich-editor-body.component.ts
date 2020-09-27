import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-rich-editor-body',
  templateUrl: './ngx-rich-editor-body.component.html',
  styleUrls: ['./ngx-rich-editor-body.component.css']
})
export class NgxRichEditorBodyComponent implements OnInit {

  data: string = "<b>test</b> <u>text</u>";

  constructor() { }

  ngOnInit() {
  }

}
