import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRichEditorComponent } from './ngx-rich-editor.component';

describe('NgxRichEditorComponent', () => {
  let component: NgxRichEditorComponent;
  let fixture: ComponentFixture<NgxRichEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRichEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRichEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
