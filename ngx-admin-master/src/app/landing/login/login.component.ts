import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserLogin;
  socialLinks:[];
  rememberMe:boolean;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = {email:"",password:"",rememberMe:false}
  }

  login(): void{
    sessionStorage.setItem("email",this.user.email);
    this.router.navigate(['/pages/profile/'+this.user.email]);
  }

  getConfigValue(value): void{

  }

}

export class UserLogin{
  email: string;
  password: string;
  rememberMe: boolean;
}
