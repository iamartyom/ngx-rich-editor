import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-rich-editor',
  templateUrl: './ngx-rich-editor.component.html',
  styleUrls: ['./ngx-rich-editor.component.css']
})
export class NgxRichEditorComponent {
  @Input() data: string;
}
