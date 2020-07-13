import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../pages/profile/jobs/jobs.component';
import { Request } from '../../pages/profile/requests/requests.component';

@Component({
  selector: 'ngx-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {


  requests : Request[];
  searchTerm: string;

  constructor(private landingService: LandingService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.searchTerm = this.route.snapshot.paramMap.get("searchTerm");
    //this.jobs = this.landingService.searchJobs(searchTerm);
    this.requests = [
      {id: 1,name: "name", client:"client", professional:"professional", description:"",price:0,clientId:0,professionalId:0,Tags:[]},
      {id: 2,name: "WebSite", client:"Jean", professional:"Maurice", description:"",price:10,clientId:0,professionalId:0,Tags:[]},
      {id: 3,name: "Phone App", client:"Marc", professional:"Maurice", description:"",price:10,clientId:0,professionalId:0,Tags:[]},
      {id: 4,name: "name", client:"client", professional:"professional", description:"",price:0,clientId:0,professionalId:0,Tags:[]},
      {id: 5,name: "WebSite", client:"Jean", professional:"Maurice", description:"",price:10,clientId:0,professionalId:0,Tags:[]},
      {id: 6,name: "Phone App", client:"Marc", professional:"Maurice", description:"",price:10,clientId:0,professionalId:0,Tags:[]},
      {id: 7,name: "name", client:"client", professional:"professional", description:"",price:0,clientId:0,professionalId:0,Tags:[]},
      {id: 8,name: "WebSite", client:"Jean", professional:"Maurice", description:"",price:10,clientId:0,professionalId:0,Tags:[]},
      {id: 9,name: "Phone App", client:"Marc", professional:"Maurice", description:"",price:10,clientId:0,professionalId:0,Tags:[]},
      {id: 10,name: "name", client:"client", professional:"professional", description:"",price:0,clientId:0,professionalId:0,Tags:[]},
      {id: 11,name: "WebSite", client:"Jean", professional:"Maurice", description:"",price:10,clientId:0,professionalId:0,Tags:[]},
      {id: 12,name: "Phone App", client:"Marc", professional:"Maurice", description:"",price:10,clientId:0,professionalId:0,Tags:[]},
      {id: 13,name: "name", client:"client", professional:"professional", description:"",price:0,clientId:0,professionalId:0,Tags:[]},
      {id: 14,name: "WebSite", client:"Jean", professional:"Maurice", description:"",price:10,clientId:0,professionalId:0,Tags:[]},
      {id: 15,name: "Phone App", client:"Marc", professional:"Maurice", description:"",price:10,clientId:0,professionalId:0,Tags:[]},
    ];
  }

  search(){
    
  }

}
