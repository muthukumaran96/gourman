import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';  

@Component({
  selector: 'app-theteam',
  templateUrl: './theteam.component.html',
  styleUrls: ['../css/css.component.css'], 
  providers: [
    { provide: CarouselConfig, useValue: { interval: 4000, noPause: true, showIndicators: false } } 
  ],     
})
export class TheteamComponent implements OnInit {


  itemsPerSlide = 5;  
  singleSlideOffset = true;
 
  slides = [ 
    {image: 'assets/images/client-2.png'},
    {image: 'assets/images/client-3.png'},
    {image: 'assets/images/client-4.png'},
    {image: 'assets/images/client-5.png'},
    {image: 'assets/images/client-hover-1.png'},
    {image: 'assets/images/client-4.png'}   
  ];   


  constructor() { }

  ngOnInit() {
  }

}
