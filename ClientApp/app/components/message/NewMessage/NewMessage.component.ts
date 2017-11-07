import {Component} from '@angular/core';
import {WebService} from '../../../services/web.service'
import { MessageComponent } from '../messages.component';

@Component({
    selector: 'NewMessage',
    providers: [WebService],
    templateUrl: './NewMessage.component.html'
})


export class NewMessageComponent{

    //@ViewChild('messages') messages: MessageComponent;
    constructor(private webservice: WebService){}
    
    message = {
        owner:  "",
        text: ""
    };

    post(){
        this.webservice.postMessage(this.message);
        //this.messages.messages.push(this.message);
    }
}