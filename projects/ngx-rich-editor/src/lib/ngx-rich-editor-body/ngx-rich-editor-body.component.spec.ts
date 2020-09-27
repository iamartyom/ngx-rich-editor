import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRichEditorBodyComponent } from './ngx-rich-editor-body.component';

describe('NgxRichEditorBodyComponent', () => {
  let component: NgxRichEditorBodyComponent;
  let fixture: ComponentFixture<NgxRichEditorBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRichEditorBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRichEditorBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
