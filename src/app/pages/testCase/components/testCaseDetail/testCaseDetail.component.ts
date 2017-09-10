import { Component, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'tap-json-editor';
import { TestCaseDetailService } from './testCaseDetail.service';
@Component({
  selector: 'test_case_detail',
  templateUrl: './testCaseDetail.html',
})

export class TestCaseDetail {
  public editorOptions: JsonEditorOptions;
  public data: any;
  constructor(private service: TestCaseDetailService) {
    this.editorOptions = new JsonEditorOptions();
  }

  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  ngOnInit() {
    this.service.getTestCaseDetail().then((data) => {
      this.editor.set(data);
      //this.data = data;
    });
  }

  public setTreeMode() {
    this.editor.setMode('tree');
  }
}
