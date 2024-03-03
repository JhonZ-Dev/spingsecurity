import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {
  code='';
  

  

  constructor(private activadRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activadRoute.queryParams.subscribe((data: any) => {
      this.code = data.code;
    });
    
  }

}
