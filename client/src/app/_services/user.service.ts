import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { WebsocketService } from './websocket.service';

import { User } from '../_models/user';
import { GLOBAL as config } from '../_config/config';
//import { config } from 'rxjs';
const user_url = 'ws://127.0.0.1:8000';//"ws://echo.websocket.org/";

@Injectable()
export class UserService {
    constructor(private http: HttpClient,
                private wsService: WebsocketService) { 
                    this.personas = <Subject<User>>this.wsService.connect(user_url).pipe(
                        map(
                          (response): any => {
                            //let data = JSON.parse(response.data);
                            console.log(response)
                            return response;
                          }
                        )
                      )
                }
                
    public personas: Subject<User>;
    contextUrl: string = config.url+'user';
    
    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`${this.contextUrl}`)
        .pipe(map(data => data));
    }

    getById(id: string): Observable<User> {
        return this.http
        .get<User>(`${this.contextUrl}/` + id)
        .pipe(map(data => data));
    }

    create(user: User): Observable<User> {
        return this.http.post<User>(`${this.contextUrl}/`, user)
        .pipe(map(data => data));;
    }

    update(user: User) {
        return this.http.post(`${this.contextUrl}/` + user._id, user)
        .pipe(map(data => data));
    }

    delete(id: string): Observable<void> {
        return this.http.delete<void>(`${this.contextUrl}/` + id)
        .pipe(map(data => data));
    }
}