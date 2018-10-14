import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})

export class BannerComponent {
  intervalCarousel = 5000;
  slides: Array<Object> = [
    { image: '../../../../assets/images/banner_01.jpg' },
    { image: '../../../../assets/images/banner_02.jpg' },
    { image: '../../../../assets/images/banner_03.jpg' },
    { image: '../../../../assets/images/banner_04.jpg' },
  ];
}
