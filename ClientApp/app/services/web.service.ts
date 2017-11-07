import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable, Inject } from '@angular/core';


@Injectable()
export class WebService{
    
    originURL: string;

    messages: any = [];

    constructor(private http: Http, @Inject('BASE_URL') originURL: string){ 
        this.originURL = originURL;
        this.getMessage();
    }

    async getMessage(){
        //console.log(this.originURL);
        var response = await this.http.get(`${this.originURL}api/Message`).toPromise();

        this.messages = response.json();
    }

    async postMessage(message: any){
        var response = await this.http.post(`${this.originURL}api/Message`, message).toPromise();
        this.messages.push(response.json());
    }
}