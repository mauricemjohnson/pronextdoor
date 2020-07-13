import { Component, OnInit, Input } from '@angular/core';
import { ProfileService, GetUserResponse } from '../profile.service';
import { tap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  @Input() email: string;
  constructor(private profileService: ProfileService, private route: ActivatedRoute) { 
    this.user = {email:"email", id: 0, name: "name", firstName: "firstname", birthday:""};
  }

  ngOnInit() {

    let mail = this.route.snapshot.paramMap.get("email");
    //this.profileService.getUser("maurice@johnson.be")
    this.profileService.getUser(mail)
    .subscribe((r:GetUserResponse) => this.mapUser(r.user));

    
    //this.user = {id: 0, name:"name", firstName:"firstname",email:"email",birthDay:""}
    console.log(this.user.name);
  }

  mapUser(user:User){
    
    this.user.id = user.id;
    this.user.name = (user as any).name;
    this.user.firstName = (user as any).firstName;
    this.user.email = (user as any).email;
    this.user.birthday = (user as any).birthDay;
  }
}

export class User{
  id: number;
        name: string;
        firstName: string;
        email: string;
        birthday: string
}
