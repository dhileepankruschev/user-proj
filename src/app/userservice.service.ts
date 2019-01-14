import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.modal';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/", { headers: { "accept": "application/json" } });
  }

  getUser(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/" + id, { headers: { "accept": "application/json" } });
  }

  editUser(user: User) {
    return this.http.put("https://jsonplaceholder.typicode.com/posts/" + user.id, user, { headers: { "accept": "application/json", "Content-Type": "application/json" } });
  }

  deleteUser(id: number) {
    return this.http.delete("https://jsonplaceholder.typicode.com/posts/" + id, { headers: { "accept": "application/json" } });
  }

  addUser(user: User) {
    return this.http.post("https://jsonplaceholder.typicode.com/posts/", user, { headers: { "accept": "application/json", "Content-Type": "application/json" } });
  }
}
