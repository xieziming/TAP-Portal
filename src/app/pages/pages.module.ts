import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTING } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { Pages } from './pages.component';
import { JsonEditorModule } from 'tap-json-editor';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, ROUTING, JsonEditorModule],
  declarations: [Pages]
})
export class PagesModule {
}
