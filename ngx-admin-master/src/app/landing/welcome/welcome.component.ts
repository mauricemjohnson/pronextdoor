import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  searchTerm: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  search(){

    this.router.navigate(['/landing/search/'+this.searchTerm]);
  }

}
