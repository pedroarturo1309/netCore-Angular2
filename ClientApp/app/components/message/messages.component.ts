import {Component} from '@angular/core';
import { WebService } from '../../services/web.service';
@Component({
    selector: 'messages',
    providers: [WebService],
    templateUrl: './messages.component.html'
})

export class MessageComponent{
    constructor(private webService: WebService){ }
    //messages = [{text: 'some text', owner: 'Pedro de Leon'}, {text: 'sdkakjdkasda', owner: 'Reinaldo'}];
}