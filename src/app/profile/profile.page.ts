import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //obtiene informacion de la URL actual

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId;

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) {}

  ngOnInit() {
    this.profileId= this.activatedRoute.snapshot.paramMap.get('id'); //obtiene el id de la URL actual);
    this.http.get('https://rickandmortyapi.com/api/character/' + this.profileId).subscribe(res=>{
      console.log(res);
    })
  }

}
