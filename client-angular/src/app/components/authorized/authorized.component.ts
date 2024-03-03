import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {
  code='';
  

  

  constructor(private activadRoute:ActivatedRoute, private authService: AuthService){}
  ngOnInit(): void {
    this.activadRoute.queryParams.subscribe((data: any) => {
      this.code = data.code;
      this.getToken();
    });
    
  }
  getToken(){
    this.authService.getToken(this.code).subscribe(
      data=>{console.log(data);},err=>{console.log(err);}
    )
  }

}
