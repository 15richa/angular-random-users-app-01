import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
@Component({
  selector: 'app-random-users',
  templateUrl: './random-users.component.html',
  styleUrls: ['./random-users.component.css']
})
export class RandomUsersComponent implements OnInit {
  users: any

  constructor(private x: UserServiceService) {}

  // make sure this is AFTER the constructor
  ngOnInit() {
    console.log();
    this.x.getUsers().subscribe(data =>{

          console.log(data)
          this.users = data['results']

    })


  }



}





