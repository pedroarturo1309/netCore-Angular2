import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable, Inject } from '@angular/core';


@Injectable()
export class WebService{
    
    originURL: string;
    constructor(private http: Http, @Inject('BASE_URL') originURL: string){ this.originURL = originURL;}

    getMessage(){
        console.log(this.originURL);
        return this.http.get(`${this.originURL}api/Message`).toPromise();
    }
}