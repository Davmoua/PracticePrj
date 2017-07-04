import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { GradeTrackerParentComponent } from './grade-tracker-parent/grade-tracker-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    GradeTrackerParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
