import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent implements OnInit {

    searchQuery: string = '';

    constructor(private route : ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.pipe(
            filter(param => param.q)
        )
        .subscribe(param => {
            this.searchQuery = param.q;
        });
    }

}
