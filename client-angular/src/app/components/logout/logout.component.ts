import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  
  constructor(private router:Router){}
  ngOnInit(): void {
    //this.tokenService.clear();
    this.router.navigate(['']);
  }

}
