import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';
import {WebService} from './services/web.service';
import { NewMessageComponent } from './components/message/NewMessage/NewMessage.component';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        AppModuleShared
    ],
    declarations: [
        NewMessageComponent],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }, WebService
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
