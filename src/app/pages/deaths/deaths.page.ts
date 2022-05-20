import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

  deaths: Observable <any>;


  constructor(private  activatedRoute: Route, private api: ApiService) { }

 
  ngOnInit() {
    this.deaths = this.api.getDeaths();
    this.deaths.subscribe(data => {
    console.log('my data: ', data);
  });
}

openDetails(death){
    let deathId = death_id;
    this.activatedRoute.navigateByUrl(`/tabs/deaths/${deathId}`);
}
}