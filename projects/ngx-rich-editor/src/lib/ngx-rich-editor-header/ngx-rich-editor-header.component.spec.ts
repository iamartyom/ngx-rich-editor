import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRichEditorHeaderComponent } from './ngx-rich-editor-header.component';

describe('NgxRichEditorHeaderComponent', () => {
  let component: NgxRichEditorHeaderComponent;
  let fixture: ComponentFixture<NgxRichEditorHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRichEditorHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRichEditorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
