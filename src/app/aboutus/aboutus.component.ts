import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['../css/css.component.css']   
})
export class AboutusComponent implements OnInit {
 
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
