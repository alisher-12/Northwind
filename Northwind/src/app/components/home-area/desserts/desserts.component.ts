import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-desserts',
    templateUrl: './desserts.component.html',
    styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {

    public styling = {
        color: Math.random() < 0.5 ? "green" : "orange"
    };

    public desserts = [
        { id: 1, name: "Ice Cream" },
        { id: 2, name: "Pavlova" },
        { id: 3, name: "Cranberries Pie" }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    public isWeekend(): boolean {
        const now = new Date();
        const day = now.getDay() + 1;
        return day >= 6;
    }

}
