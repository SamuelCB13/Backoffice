import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigateComponent } from './navigate/navigate.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';

const routes: Routes = [
  {
    path: '', component: NavigateComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'learnmore', component: LearnmoreComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }