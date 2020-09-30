import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-rich-editor-body',
  templateUrl: './ngx-rich-editor-body.component.html',
  styleUrls: ['./ngx-rich-editor-body.component.scss']
})
export class NgxRichEditorBodyComponent {
  @Input() data: string;
  @Input() disabled: boolean;

  @Output() change = new EventEmitter<string>();

  onChange(value: string): void {
    this.data = value;
    this.change.emit(this.data);
  }
}