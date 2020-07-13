import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbProgressBarModule,
  NbInputModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { UserComponent } from './user/user.component';
import { RequestsComponent } from './requests/requests.component';
import { JobsComponent } from './jobs/jobs.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile.component';
import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AddJobComponent } from './add-job/add-job.component';
import { ProfileService } from './profile.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    UserComponent,
    RequestsComponent,
    JobsComponent,
    WalletComponent,
    AddJobComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
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
    LeafletModule,
    FormsModule,
    NbInputModule
  ],
  entryComponents: [
    AddJobComponent
  ],
  providers:[
    ProfileService
  ]
})
export class ProfileModule { }
