import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { JsonEditorComponent, JsonEditorOptions } from 'tap-json-editor';
import { TestCaseDetailService } from './testCaseDetail.service';

@Component({
  selector: 'test_case_detail',
  templateUrl: './testCaseDetail.html',
})

export class TestCaseDetail {
  editorOptions: JsonEditorOptions = new JsonEditorOptions();
  uid: string;
  @ViewChild(JsonEditorComponent)
  editor: JsonEditorComponent;

  constructor(private service: TestCaseDetailService, private route: ActivatedRoute) {
    this.editorOptions.schema = {
        $ref: "assets/schemas/testcase_schema.json",
        format: "grid"
    };
    this.editorOptions.ajax = true;
  }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.service.getTestCaseDetail(this.uid).then((data) => {
       this.editor.set(data);
    });
  }
}
