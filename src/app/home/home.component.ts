import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel'; 
import { Lightbox } from 'ngx-lightbox';

import {ImageService} from './service/image.service';
 
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../css/css.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 4000, noPause: true, showIndicators: false } } 
  ],     
}) 
export class HomeComponent implements OnInit {

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
  
  images = [];
  slideIndex = 0;
  constructor(private imageService: ImageService) { }

  ngOnInit() : void {
    this.loadImages();    
  }

  loadImages(): void {
    this.imageService.fetchImages()
     .subscribe(images => this.images = images);
   }
   openModal() {
    document.getElementById('imgModal').style.display = "block";
   }
   closeModal() {
    document.getElementById('imgModal').style.display = "none";
   }
   plusSlides(n) {
    this.showSlides(this.slideIndex += n);
   }
   currentSlide(n) {
    this.showSlides(this.slideIndex = n);
   }
   showSlides(slideIndex);
   showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("img-slides") as HTMLCollectionOf < HTMLElement > ;
    const dots = document.getElementsByClassName("images") as HTMLCollectionOf < HTMLElement > ;
    if (n > slides.length) {
     this.slideIndex = 1
    }
    if (n < 1) {
     this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    if (dots && dots.length > 0) {
     dots[this.slideIndex - 1].className += " active";
    }
   } 
  } 



