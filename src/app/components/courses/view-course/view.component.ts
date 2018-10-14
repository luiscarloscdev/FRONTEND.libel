import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})

export class ViewCourseComponent implements OnInit {
  collection = [];
  constructor() {
  }

  ngOnInit() {
    for (let i = 1; i <= 3; i++) {
      this.collection.push({ 'items' :
        [
          {'val': 1 + 'item-c: ' + i},
          {'val': 2 + 'item-c: ' + i},
          {'val': 3 + 'item-c: ' + i}
        ]
      });
    }
  }
}
