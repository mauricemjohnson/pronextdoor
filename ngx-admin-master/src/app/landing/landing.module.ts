import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ThemeModule } from '../@theme/theme.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbUserModule, NbButtonModule, NbIconModule, NbTabsetModule, NbSelectModule, NbListModule, NbProgressBarModule, NbAlertModule, NbInputModule, NbCheckboxModule } from '@nebular/theme';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
    imports: [
      ThemeModule,
      LandingRoutingModule,
      CommonModule,
      NbCardModule,
      NbUserModule,
      NbButtonModule,
      NbIconModule,
      NbTabsetModule,
      NbSelectModule,
      NbListModule,
      ChartModule,
      NbProgressBarModule,
      NgxEchartsModule,
      NgxChartsModule,
      NbAlertModule,
      FormsModule,
      NbInputModule,
      NbCheckboxModule
    ],
    declarations: [
      LandingComponent,
      WelcomeComponent,
      LoginComponent,
      RegistrationComponent,
      SearchResultsComponent,
    ],
  })
  export class LandingModule {
  }