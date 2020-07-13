import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LandingComponent } from './landing.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from '../pages/ui-features/search-fields/search-fields.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent,
  children: [
    {
      path: 'welcome',
      component: WelcomeComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegistrationComponent,
    },
    {
      path: 'search',
      component: SearchResultsComponent,
    },
    {
      path: 'search/:searchTerm',
      component: SearchResultsComponent,
    },
    {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {
}