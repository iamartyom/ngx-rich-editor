import { NgModule } from '@angular/core';
import { NgxRichEditorComponent } from './ngx-rich-editor/ngx-rich-editor.component';
import { NgxRichEditorBodyComponent } from './ngx-rich-editor-body/ngx-rich-editor-body.component';



@NgModule({
  declarations: [NgxRichEditorComponent, NgxRichEditorBodyComponent],
  imports: [
  ],
  exports: [NgxRichEditorComponent]
})
export class NgxRichEditorModule { }
