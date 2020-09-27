import { TestBed } from '@angular/core/testing';

import { NgxRichEditorService } from './ngx-rich-editor.service';

describe('NgxRichEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRichEditorService = TestBed.get(NgxRichEditorService);
    expect(service).toBeTruthy();
  });
});
