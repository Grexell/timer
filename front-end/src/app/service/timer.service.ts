import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Timer} from '../model/timer';

@Injectable({
    providedIn: 'root'
})
export class TimerService {

    private readonly GET_URL = 'http://localhost:8080/api/get/';
    private readonly CREATE_URL = 'http://localhost:8080/api/create';

    constructor(private httpClient: HttpClient) {
    }

    public get(id: number): Observable<Timer> {
        const url = this.GET_URL + id;
        return this.httpClient.get<Timer>(url);
    }

    public create(timer: Timer): Observable<number> {
        return this.httpClient.post<number>(this.CREATE_URL, timer);
    }
}
