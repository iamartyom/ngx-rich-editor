import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-rich-editor',
  templateUrl: './ngx-rich-editor.component.html',
  styleUrls: ['./ngx-rich-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxRichEditorComponent),
      multi: true
    }
  ]
})
export class NgxRichEditorComponent implements ControlValueAccessor {
  data: string;
  disabled: boolean;

  onChange: (value: string) => { }

  writeValue(obj: any): void {
   this.data = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {

  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}