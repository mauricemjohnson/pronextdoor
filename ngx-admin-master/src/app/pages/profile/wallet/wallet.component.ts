import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'ngx-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit, OnDestroy {
  
  ngOnInit(): void {
  }

  private alive = true;

  histories: HistoryRow[] = [];
  @Input() userId: number;
  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private profileService: ProfileService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    this.getUserActivity(this.userId);
     //this.histories = [
      //  {id: 1,client:"client",professionnal:"professional",date:"date",amount:0},
      //  {id: 1,client:"Maurice",professionnal:"Joseph",date:"22-09-2022",amount:-10},
      //  {id: 1,client:"Marc",professionnal:"Maurice",date:"13-09-2022",amount:10},
      //  {id: 1,client:"Maurice",professionnal:"Joseph",date:"21-07-2022",amount:-10},
      //  {id: 1,client:"Jean",professionnal:"Maurice",date:"10-07-2022",amount:10},
     //]
  }

  getUserActivity(userId: number) {
    this.profileService.getUserWallet(userId)
      .pipe(takeWhile(() => this.alive))
      .subscribe(userActivityData => {
        this.histories = userActivityData.filter(h => h.ClientId === userId);
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}

export class HistoryRow{
  id: number;
  ClientId: number;
  date : string;
        amount : number;
        professionnal : string;
        client : string;
}
