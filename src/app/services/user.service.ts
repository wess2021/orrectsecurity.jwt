import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private userUrl = 'http://localhost:8080/api/test/user';
  private modUrl = 'http://localhost:8080/api/test/mod';
  private adminUrl = 'http://localhost:8080/api/test/admin';
 
  constructor(private http: HttpClient) { }
 
  getUserBoard(): Observable {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }
 
  getModBoard(): Observable {
    return this.http.get(this.modUrl, { responseType: 'text' });
  }
 
  getAdminBoard(): Observable {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}