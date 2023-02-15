import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

// ng g c components/home-area/facebook

@Component({
    selector: 'app-facebook',
    templateUrl: './facebook.component.html',
    styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

    public style = {
        color: ""
    }

    // DI - Dependency Injection:
    constructor(private colorsService: ColorsService) { }

    ngOnInit(): void { // like useEffect
        this.style.color = this.colorsService.getRandomColor();
    }

}
