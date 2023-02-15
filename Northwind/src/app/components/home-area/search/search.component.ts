import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    public titleText = Math.random() < 0.5 ? "Search entire website" : "Search our website";

    public searchText: string;

    constructor() { }

    ngOnInit(): void {
    }

    public search(args: Event): void {
        console.log(args);
        alert("Searching: " + this.searchText);
        this.searchText = "";
    }

}
