import { Component, OnInit } from '@angular/core';
import { TestCaseListService } from './testCaseList.service';
import { Router } from '@angular/router';

@Component({
  selector: 'test_case_list',
  templateUrl: './testCaseList.html',
  styleUrls: ['./testCaseList.scss']
})
export class TestCaseList {
    data;
    filterQuery = "";
    rowsOnPage = 15;
    sortBy = "uid";
    sortOrder = "asc";

    constructor(private service: TestCaseListService, private router: Router) {
      this.service.getTestCases().then((data) => {
        this.data = data;
      });
    }

    toInt(num: string) {
        return +num;
    }
}
