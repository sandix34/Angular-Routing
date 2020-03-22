import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public id: string;
  public name: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.id = paramMap.get('id');
    });

    this.activatedRoute.queryParamMap.subscribe( (queryParam: ParamMap) => {
      this.name = queryParam.get('name');
    });

    this.activatedRoute.fragment.subscribe( (f) => {
      console.log(f);
    })

    this.activatedRoute.data.subscribe(d => {
      console.log(d);
      
    })
  }

}
