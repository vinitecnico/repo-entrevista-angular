import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskSummaryComponent } from './components/task-summary/task-summary.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'summary', component: TaskSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule],
})
export class AppRoutingModule {}
