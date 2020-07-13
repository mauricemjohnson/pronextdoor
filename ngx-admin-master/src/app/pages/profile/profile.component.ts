import { Component, OnInit, Input } from '@angular/core';
import { User } from './user/user.component';
import { ProfileService } from './profile.service';
import { ActivatedRoute, Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';
import { AddJobComponent } from './add-job/add-job.component';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor(private profileService: ProfileService, private route: ActivatedRoute, private router: Router, 
    private dialogService: NbDialogService) {
    this.user = {email:"email", id: 0, name: "name", firstName: "firstname", birthday:""};
    let userEmail = this.route.snapshot.paramMap.get("email");
    this.profileService.getUser(userEmail)
      .subscribe((r) => this.user = r.user);
  }

  ngOnInit() {
    let userEmail = this.route.snapshot.paramMap.get("email");
    this.route.paramMap.subscribe(params => {
      userEmail = params.get("email");
    });
    
  }

  addRequest(){
    this.router.navigate(['/pages/addRequest/'+this.user.email]);
  }

  open(){
    this.dialogService.open( AddJobComponent)
  }

}
