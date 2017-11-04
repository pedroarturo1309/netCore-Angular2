import {Component} from '@angular/core';
import { WebService } from '../../services/web.service';
@Component({
    selector: 'messages',
    templateUrl: './messages.component.html'
})

export class MessageComponent{
    constructor(private webService: WebService){}

    async ngOnInit(){
        var response = await this.webService.getMessage();
        this.messages = response.json();
    }

    messages = [];
    //messages = [{text: 'some text', owner: 'Pedro de Leon'}, {text: 'sdkakjdkasda', owner: 'Reinaldo'}];
}