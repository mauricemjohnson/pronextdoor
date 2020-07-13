import { Injectable } from '@angular/core';
import { HistoryRow } from './wallet/wallet.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user/user.component';
import { Request } from './requests/requests.component';
import { Job } from './jobs/jobs.component';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileUrl = 'api/profile';
  constructor(private http: HttpClient) { }

  getUser(userEmail: string): Observable<GetUserResponse>{
    return this.http.get<GetUserResponse>(this.profileUrl+"/user/"+userEmail);
  }
  

  getUserWallet(userId: number): Observable<HistoryRow[]>{
    return this.http.get<HistoryRow[]>(this.profileUrl+"/wallet/"+userId);
  }

  AddWalletAmount(userId: number, amount: number): void{
    this.http.post<void>(this.profileUrl+"/wallet/"+userId, {userId: userId, amount: amount});
  }

  AddRequest(request: Request): void{
    this.http.post<void>(this.profileUrl+"/requests", request);
        }

  GetRequests(id: number): Observable<Request[]>{
    return this.http.get<Request[]>(this.profileUrl+"/requests/"+id);
        }
        
        
  GetJobs(id: number): Observable<Job[]>{
    return this.http.get<Job[]>(this.profileUrl+"/jobs/"+id);
        }
  
  AddJob(job: Job): void{
          this.http.post<void>(this.profileUrl+"/jobs", job).pipe(
            catchError(this.handleError)
          );
              }
  
  private handleError (error: any) {
                // In a real world app, we might send the error to remote logging infrastructure
                // and reformat for user consumption
                console.error(error); // log to console instead
                return (error);
              }
}

export class GetUserResponse{
  user : User;
}
