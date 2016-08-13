import {Component, OnInit} from '@angular/core';
import { HotelFormComponent } from './components/hotelFormComponent';

@Component({
    selector: 'hotel',
    templateUrl: './hotel.html',
    styleUrls: ['./hotel.css'],
    directives: [HotelFormComponent]
})
export class HotelComponent implements OnInit {
    
    ngOnInit() {
    }
}