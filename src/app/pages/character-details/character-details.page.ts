import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  character: any;

  constructor(private  activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
      
    let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.api.getCharacter(id).subscribe(data => {
      this.character = data;
    });
  }

}
