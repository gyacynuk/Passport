import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

    searchInput: EventEmitter;

    constructor() {
        this.searchInput = new EventEmitter();
    }

    pushSearchText(text: string) {
        this.searchInput.emit(text);
    }
}
