import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: any[] = [
    {
      name: 'Jean',
      id: 1
    },
    {
      name: 'Paul',
      id: 2
    },
    {
      name: 'Julie',
      id:3
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
