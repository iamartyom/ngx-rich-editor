import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxRichEditorModule } from 'ngx-rich-editor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxRichEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
