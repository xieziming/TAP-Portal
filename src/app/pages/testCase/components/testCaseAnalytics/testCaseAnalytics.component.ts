import { Component } from '@angular/core';
import { TestCaseAnalyticsService } from './testCaseAnalytics.service';

@Component({
  selector: 'test_case_analytics',
  templateUrl: './testCaseAnalytics.html',
  styleUrls: ['./testCaseAnalytics.scss'],
})

export class TestCaseAnalytics {
  data: any;

  constructor(private testCaseAnalyticsService: TestCaseAnalyticsService) {
  }

  ngOnInit() {
    this.data = this.testCaseAnalyticsService.getAll();
  }

  getResponsive(padding, offset) {
    return this.testCaseAnalyticsService.getResponsive(padding, offset);
  }
}
