import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const CODE_VERIFIER = 'code_verifier';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setTokens(access_token:string, refresh_token:string):void{
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.setItem(ACCESS_TOKEN, access_token);
    localStorage.removeItem(REFRESH_TOKEN)
    localStorage.setItem(REFRESH_TOKEN, refresh_token);
  }
  

  getAccessToken():string | null{
    return localStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshToken():string | null{
    return localStorage.getItem(REFRESH_TOKEN);
  }
  clear():void{
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }

  isLogged():boolean{
    return localStorage.getItem(ACCESS_TOKEN) !=null;
  }
  isAdmin(): boolean {
    // Verificar si el usuario está autenticado
    if (!this.isLogged()) {
      return false;
    }
    
    // Obtener el token
    const token = this.getAccessToken();
  
    // Verificar si el token es nulo o está vacío
    if (!token) {
      return false;
    }
  
    // Decodificar el payload del token
    const parts = token.split('.');
    const encodedPayload = parts[1];
    const decodedPayload = atob(encodedPayload);
    const payload = JSON.parse(decodedPayload);
  
    // Verificar si el token contiene el rol de administrador
    const roles = payload.roles;
    if (!roles || !roles.includes('ROLE_ADMIN')) {
      return false;
    }
  
    // Si el token es válido y el usuario tiene el rol de administrador, devolver true
    return true;
  }
  

  setVerifier(code_verifier:string):void{
    if(localStorage.getItem(CODE_VERIFIER)){
      this.deleteVerifier();
    }
    const encrypted = CryptoJS.AES.encrypt(code_verifier, environment.secret_pkce);
    localStorage.setItem(CODE_VERIFIER, encrypted.toString());

  }

  getVerifier():string{
    const encrypted = localStorage.getItem(CODE_VERIFIER);
    const decryped = CryptoJS.AES.decrypt(encrypted, environment.secret_pkce).toString(CryptoJS.enc.Utf8);
    return decryped;
  }

  deleteVerifier():void{
    localStorage.removeItem(CODE_VERIFIER);
  }
}
