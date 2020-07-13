import { Component, OnInit } from '@angular/core';
import { User } from '../../pages/profile/user/user.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingService } from '../landing.service';
import { ProfileService } from '../../pages/profile/profile.service';

@Component({
  selector: 'ngx-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User;
  constructor(private landingService: LandingService, private profileService: ProfileService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = {email:"",name:"", firstName:"", birthday:"",id:0};
  }

  register(): void{
    
    this.landingService.addUser(this.user);

    let testUser = {email:"",name:"", firstName:"", birthday:"",id:0};
    this.landingService.getUser(this.user.email)
    .subscribe(r => testUser =   r.user);

    this.router.navigate(['/pages/profile/'+this.user.email]);
  }

  getConfigValue(value): void{

  }

}
