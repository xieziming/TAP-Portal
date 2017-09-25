import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';
import { DataFilterPipe } from './components/testCaseList/data-filter.pipe';
import { ROUTING } from './testCase.routing';
import { TestCase } from './testCase.component';
import { TestCaseList } from './components/testCaseList/testCaseList.component';
import { TestCaseAnalytics } from './components/testCaseAnalytics/testCaseAnalytics.component';
import { TestCaseDetail } from './components/testCaseDetail/testCaseDetail.component';
import { TestCaseListService } from './components/testCaseList/testCaseList.service';
import { TestCaseAnalyticsService } from './components/testCaseAnalytics/testCaseAnalytics.service';
import { AppTranslationModule } from '../../app.translation.module';
import { TestCaseDetailService } from './components/testCaseDetail/testCaseDetail.service';
import { JsonEditorModule } from 'tap-json-editor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    ROUTING,
    JsonEditorModule,
    DataTableModule,
    HttpModule,
    AppTranslationModule,
  ],
  declarations: [
    TestCase,
    TestCaseList,
    TestCaseAnalytics,
    TestCaseDetail,
    DataFilterPipe,
  ],
  providers: [
    TestCaseListService,
    TestCaseAnalyticsService,
    TestCaseDetailService,
  ],
})
export class TestCaseModule {
}
