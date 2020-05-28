import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, public json : UserService) { }

  User = [];

  ngOnInit() {

    let result = this._activatedRoute.snapshot.paramMap.get("id");
    this.json.getUserDetails(result).subscribe((res : any) => {
      // this.User = res;
      this.User = res.data;
      console.log(this.User)
    })
   }

  }

