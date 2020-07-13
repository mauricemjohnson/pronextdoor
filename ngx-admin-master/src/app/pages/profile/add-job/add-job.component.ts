import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../jobs/jobs.component';
import { ProfileService } from '../profile.service';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Request } from '../requests/requests.component';

@Component({
  selector: 'ngx-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  request: Request;

  constructor(protected ref: NbDialogRef<AddJobComponent>, 
    private profileService : ProfileService) { 
    }

  ngOnInit() {
    this.request = {id:0,name:"", price:0,client:"",professional:"",clientId:0,professionalId:0, description:"",Tags:[]}
  }

  dismiss() {
    this.ref.close();
  }

  addRequest(): void{

    let email = sessionStorage.getItem("email");
    //let user = this.profileService.getUser(email);
    this.request.client = email;
    this.profileService.AddRequest(this.request);
    this.ref.close();
  }

  getConfigValue(value): void{

  }

}
