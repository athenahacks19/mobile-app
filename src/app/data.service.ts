import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get(userId: string) {
    return this.http.get(`${environment.server}/user?userId=${userId}`).toPromise();
  }
}
