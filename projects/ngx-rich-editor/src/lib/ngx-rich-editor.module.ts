import { NgModule } from '@angular/core';
import { NgxRichEditorComponent } from './ngx-rich-editor/ngx-rich-editor.component';
import { NgxRichEditorBodyComponent } from './ngx-rich-editor-body/ngx-rich-editor-body.component';
import { NgxRichEditorHeaderComponent } from './ngx-rich-editor-header/ngx-rich-editor-header.component';



@NgModule({
  declarations: [NgxRichEditorComponent, NgxRichEditorBodyComponent, NgxRichEditorHeaderComponent],
  imports: [
  ],
  exports: [NgxRichEditorComponent]
})
export class NgxRichEditorModule { }
