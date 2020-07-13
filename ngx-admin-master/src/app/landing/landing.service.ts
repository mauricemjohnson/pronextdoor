import { Injectable } from '@angular/core';
import { User } from '../pages/profile/user/user.component';
import { stringify } from 'querystring';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../pages/profile/jobs/jobs.component';
import { Observable } from 'rxjs';
import { GetUserResponse } from '../pages/profile/profile.service';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  private profileUrl = 'api/register/user';
  private searchUrl = "api/requests/search"
  constructor(private http: HttpClient) { }

  addUser(user: User): void{
    let succes = false;
    console.log(user);
    this.http.post<void>(this.profileUrl,user, { headers: new HttpHeaders().set('Content-type', 'application/json')})
    .subscribe();
  }

  searchJobs(term:string): Observable<Job[]>{
    let result;
    console.log(term);
    this.http.get<searchResponse>(this.searchUrl+"/"+term)
    .subscribe(
      (val) => {
        console.log('get call successful value returned in body',
          val);
        result = val;
      },
      response => {
        console.log('get call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
    return result.jobs;
  }

  getUser(userEmail: string): Observable<GetUserResponse>{
    return this.http.get<GetUserResponse>('api/profile/user/'+userEmail);
  }
}

export class searchResponse{

  jobs:Job[]
}
