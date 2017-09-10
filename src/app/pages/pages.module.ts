import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTING } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import { JSONEditorModule } from 'tap-json-editor';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, ROUTING, JSONEditorModule],
  declarations: [Pages],
})
export class PagesModule {
}
