import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantsContainerComponent } from './home/applicants-container/applicants-container.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: 'search', component: SearchPageComponent },
  { path: '', component: ApplicantsContainerComponent },
  { path: '*', component: ApplicantsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ApplicantsContainerComponent]