import { HotelComponent } from './hotel/hotelComponent';
import {Component, OnInit} from '@angular/core';
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES, RouteParams} from '@angular/router-deprecated';

@Component({
    selector: 'app',
    templateUrl: './app.html',
    directives: [RouterLink, ROUTER_DIRECTIVES, HotelComponent]
})

@RouteConfig([
    
])
export class AppComponent implements OnInit {
    
    ngOnInit() {
    }
}