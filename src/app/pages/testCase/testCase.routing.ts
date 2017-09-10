import { Routes, RouterModule } from '@angular/router';
import { TestCase } from './testCase.component';
import { TestCaseList } from './components/testCaseList/testCaseList.component';
import { TestCaseAnalytics } from './components/testCaseAnalytics/testCaseAnalytics.component';
import { TestCaseDetail } from './components/testCaseDetail/testCaseDetail.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: TestCase,
    children: [
      { path: 'testCaseList', component: TestCaseList },
      { path: 'testCaseAnalytics', component: TestCaseAnalytics },
      { path: 'testCaseDetail', component: TestCaseDetail },
    ],
  },
];

export const ROUTING = RouterModule.forChild(routes);
