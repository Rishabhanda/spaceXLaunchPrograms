import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LaunchMission } from '../models/launch-mission.model';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private http: HttpService) {
    }

    getAllLaunchedMissions(params?: {}): Observable<LaunchMission[]> {
        if (params && Object.keys(params).length) {
            return this.http.get('launches', params).pipe(
                map((res: []) => res.map(mission => new LaunchMission(mission))
                ));
        } else {
            const reqQueryParams = { limit: 100 };
            return this.http.get('launches', reqQueryParams).pipe(
                map((res: []) => res.map(mission => new LaunchMission(mission))
                ));
        }
    }
}
