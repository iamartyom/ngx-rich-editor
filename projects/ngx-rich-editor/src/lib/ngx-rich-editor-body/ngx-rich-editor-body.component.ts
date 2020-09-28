import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-rich-editor-body',
  templateUrl: './ngx-rich-editor-body.component.html',
  styleUrls: ['./ngx-rich-editor-body.component.css']
})
export class NgxRichEditorBodyComponent {
  @Input() data: string;
}
