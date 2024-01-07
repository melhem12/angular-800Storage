import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../ApiResponse';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}




  getUsers(page: number, perPage: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?page=${page}&per_page=${perPage}`);
  }
  // user.service.ts
  getUser(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
