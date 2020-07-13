import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../requests/requests.component';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'ngx-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  @Input() userId: number;
  jobs: Job[];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.GetJobs(this.userId)
    .subscribe(r => this.jobs = r.filter(j => j.professionalId === this.userId));
    // this.jobs = [
    //    {id: 1,name: "name", client:"client", professional:"professional", description:"",price:0,clientId:0,professionalId:0,Tags:[]},
    //    {id: 2,name: "WebSite", client:"Jean", professional:"Maurice", description:"",price:10,clientId:0,professionalId:0,Tags:[]},
    //    {id: 3,name: "Phone App", client:"Marc", professional:"Maurice", description:"",price:10,clientId:0,professionalId:0,Tags:[]}
    //  ];
  }


}

export class Job{
  id: number;
  name: string;
        description: string;
        price: number;
        clientId: number;
        professionalId: number
        client: string;
        professional: string;

        Tags: Tag[]
}
