import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FiltersService {

    constructor() { }

    getLaunchYears(startYear, endYear) {
        const launchYears = [];
        for (let i = startYear; i <= endYear; i++) {
            launchYears.push(i);
        }
        return launchYears;
    }

}
