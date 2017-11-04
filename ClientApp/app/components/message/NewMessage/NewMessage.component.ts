import {Component} from '@angular/core';
import {WebService} from '../../../services/web.service'

@Component({
    selector: 'NewMessage',
    templateUrl: './NewMessage.component.html'
})

export class NewMessageComponent{
    constructor(private webservice: WebService){}

}