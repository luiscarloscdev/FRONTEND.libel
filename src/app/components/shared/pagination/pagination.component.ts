import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './pagination.component.html',
  styles: ['./style.scss']
})
export class PaginationComponent implements OnInit {
  collection = [];
  p: any;

  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push({ 'items' :
        [
          {'val': 1 + 'item-c: ' + i},
          {'val': 2 + 'item-c: ' + i},
          {'val': 3 + 'item-c: ' + i},
          {'val': 4 + 'item-c: ' + i},
          {'val': 5 + 'item-c: ' + i}]
        });
    }
  }

  ngOnInit() {
  }

}
