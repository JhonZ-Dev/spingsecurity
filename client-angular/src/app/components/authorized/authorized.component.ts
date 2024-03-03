import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {
  code='';
  

  

  constructor(private activadRoute:ActivatedRoute, private authService: AuthService, private tokenService:TokenService ){}
  ngOnInit(): void {
    this.activadRoute.queryParams.subscribe((data: any) => {
      this.code = data.code;
      this.getToken();
    });
    
  }
  getToken(){
    this.authService.getToken(this.code).subscribe(
      data=>{
        //console.log(data);
        this.tokenService.setTokens(data.access_token, data.refresh_token);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
