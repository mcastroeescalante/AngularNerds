import { Injectable } from '@angular/core';
import { User } from './model/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[];

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
}
