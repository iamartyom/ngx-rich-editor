import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxRichEditorModule } from 'ngx-rich-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRichEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
