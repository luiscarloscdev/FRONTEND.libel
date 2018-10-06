import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})

export class BannerComponent {
  slides: Array<Object> = [
    { 'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg' },
    { 'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg' },
    { 'image': 'https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg' },
  ];
}
