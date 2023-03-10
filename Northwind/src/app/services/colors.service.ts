import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root" // tell angular to create an object at app level.
})
export class ColorsService {
    public getRandomColor(): string {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r},${g},${b})`;
        return color;
    }
}



