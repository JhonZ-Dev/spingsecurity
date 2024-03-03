import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token_url = environment.token_url;

  constructor(private httpClient:HttpClient ) { }
  public getToken(code:string):Observable<any>{
    let body = new URLSearchParams();
    body.set('grant_type',environment.grant_type);
    body.set('client_id',environment.client_id);
    body.set('redirect_uri',environment.redirect_uri);
    body.set('scope',environment.scope);
    body.set('code_verifier',environment.code_verifier);
    body.set('code',code);
    return this.httpClient.get('')
  }
}
