import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxRichEditorModule } from 'projects/ngx-rich-editor/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRichEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
