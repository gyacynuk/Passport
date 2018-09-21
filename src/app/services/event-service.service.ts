import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PassportEvent, ServerEvent } from '../models/event';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    readonly BASE_URL = 'http://localhost:53639/';
    readonly EVENTS_ENDPOINT = 'api/Event/events';

    readonly httpOptions = {
        withCredentials: true
    };

    constructor(private http: HttpClient) { }

    getUpcomingEvents(): Observable<PassportEvent[]> {
        return this.http.get<ServerEvent[]>(this.BASE_URL + this.EVENTS_ENDPOINT, this.httpOptions)
        .pipe(
            map(events => events.map(event => PassportEvent.create(event)))
        )
    }
}
