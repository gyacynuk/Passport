import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PassportUser } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    readonly BASE_URL = 'http://localhost:53639/';
    readonly USER_ENDPOINT = 'api/User/';

    readonly httpOptions = {
        headers: new HttpHeaders({}),
        withCredentials: true
    };

    constructor(private http: HttpClient) { }

    getCurrentUser(): Observable<PassportUser> {
        let URL = this.BASE_URL + this.USER_ENDPOINT + 'Current';
        return this.http.get<PassportUser>(URL, this.httpOptions);
    }

    getAllUsers(): Observable<PassportUser[]> {
        let URL = this.BASE_URL + this.USER_ENDPOINT + 'Users';
        return this.http.get<PassportUser[]>(URL, this.httpOptions);
    }

    getUser(id: number) {
        let URL = this.BASE_URL + this.USER_ENDPOINT + 'Users/' + id;
        return this.http.get<PassportUser>(URL, this.httpOptions)
        .pipe(
            map(users => users[0])
        );
    }
}
