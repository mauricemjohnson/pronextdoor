import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'ngx-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  @Input() userId: number;
  requests: Request[];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.GetRequests(this.userId)
    .subscribe(r => this.requests = r.filter(r => r.clientId === this.userId));

    //  this.requests = [
    //    {id: 1, name: "name", client:"client", professional:"professional", description:"",price:0,clientId:0,professionalId:0,Tags:[]},
       
    //    {id: 2, name: "Bureau", client:"Maurice", professional:"Joseph", description:"",price:10,clientId:0,professionalId:0,Tags:[]},
       
    //    {id: 3, name: "Meuble télé", client:"Maurice", professional:"Joseph", description:"",price:10,clientId:0,professionalId:0,Tags:[]}
    //  ];
  }

}

export class Request{
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

export class Tag{
  id: number;
  name: string;
}
