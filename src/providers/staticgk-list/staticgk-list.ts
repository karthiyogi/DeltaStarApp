import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StaticgkListProvider {

  constructor(public http: Http) {
    console.log('Hello StaticgkListProvider Provider');

    load(): Observable<any[]> {
      return this.http.get(`${this.githubApiUrl}/users`)
        .map(res => <User[]>res.json());
    }

   
  }

}
