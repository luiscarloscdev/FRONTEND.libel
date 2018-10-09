import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {GLOBAL} from '../../../services/global';

@Component({selector: 'app-seccion-cursos', templateUrl: './seccion-cursos.component.html', styleUrls: ['./styles.scss']})

export class SeccionCursosComponent implements OnInit {
  @Input() name: string;
  courses: any[];
  title: string;
  intervalCarousel: 0;
  constructor() {}

  ngOnInit() {
    console.log(this.name);
    switch (this.name) {
      case 'zbrush':
        this.title = 'ZBrush';
        this.courses = [
          {
            'items': [
              {
                url: '../../../../assets/images/zbrush-para-impresion-libel-studios.jpg',
                type: 'Avanzado',
                name: 'ZBrush para Impresión'
              }, {
                url: '../../../../assets/images/zbrush-para-impresion-libel-studios.jpg',
                type: 'Avanzado',
                name: 'ZBrush para Impresión'
              }, {
                url: '../../../../assets/images/zbrush-para-impresion-libel-studios.jpg',
                type: 'Avanzado',
                name: 'ZBrush para Impresión'
              }, {
                url: '../../../../assets/images/zbrush-para-impresion-libel-studios.jpg',
                type: 'Avanzado',
                name: 'ZBrush para Impresión'
              }
            ]
          }, {
            'items': [
              {
                url: '../../../../assets/images/zbrush-para-impresion-libel-studios.jpg',
                type: 'Avanzado',
                name: 'ZBrush para Impresión'
              }, {
                url: '../../../../assets/images/zbrush-para-impresion-libel-studios.jpg',
                type: 'Avanzado',
                name: 'ZBrush para Impresión'
              }, {
                url: '../../../../assets/images/zbrush-para-impresion-libel-studios.jpg',
                type: 'Avanzado',
                name: 'ZBrush para Impresión'
              }, {
                url: '../../../../assets/images/zbrush-para-impresion-libel-studios.jpg',
                type: 'Avanzado',
                name: 'ZBrush para Impresión'
              }

            ]
          }
        ];
        break;
      case 'free':
        this.title = 'Gratis';
        this.courses = [
          {
            'items': [
              {
                url: '../../../../assets/images/crea-veoliciraptor-blue-en-zbrush-libel-studios.jpg',
                type: 'Básico',
                name: 'Crea Veoliciraptor Blue en ZBrush'
              }, {
                url: '../../../../assets/images/crea-veoliciraptor-blue-en-zbrush-libel-studios.jpg',
                type: 'Básico',
                name: 'Crea Veoliciraptor Blue en ZBrush'
              }, {
                url: '../../../../assets/images/crea-veoliciraptor-blue-en-zbrush-libel-studios.jpg',
                type: 'Básico',
                name: 'Crea Veoliciraptor Blue en ZBrush'
              }, {
                url: '../../../../assets/images/crea-veoliciraptor-blue-en-zbrush-libel-studios.jpg',
                type: 'Básico',
                name: 'Crea Veoliciraptor Blue en ZBrush'
              }
            ]
          }, {
            'items': [
              {
                url: '../../../../assets/images/crea-veoliciraptor-blue-en-zbrush-libel-studios.jpg',
                type: 'Básico',
                name: 'Crea Veoliciraptor Blue en ZBrush'
              }, {
                url: '../../../../assets/images/crea-veoliciraptor-blue-en-zbrush-libel-studios.jpg',
                type: 'Básico',
                name: 'Crea Veoliciraptor Blue en ZBrush'
              }, {
                url: '../../../../assets/images/crea-veoliciraptor-blue-en-zbrush-libel-studios.jpg',
                type: 'Básico',
                name: 'Crea Veoliciraptor Blue en ZBrush'
              }, {
                url: '../../../../assets/images/crea-veoliciraptor-blue-en-zbrush-libel-studios.jpg',
                type: 'Básico',
                name: 'Crea Veoliciraptor Blue en ZBrush'
              }
            ]
          }
        ];
        break;
      case 'comingsoon':
        this.title = 'comingsoon';
        this.courses = [
          {
            'items': [
              {
                url: '../../../../assets/images/arma-para-videojuegos-libel-studios.jpg',
                type: 'Avanzado',
                name: 'Arma para Videojuegos'
              }, {
                url: '../../../../assets/images/arma-para-videojuegos-libel-studios.jpg',
                type: 'Avanzado',
                name: 'Arma para Videojuegos'
              }, {
                url: '../../../../assets/images/arma-para-videojuegos-libel-studios.jpg',
                type: 'Avanzado',
                name: 'Arma para Videojuegos'
              }, {
                url: '../../../../assets/images/arma-para-videojuegos-libel-studios.jpg',
                type: 'Avanzado',
                name: 'Arma para Videojuegos'
              }

            ]
          }, {
            'items': [
              {
                url: '../../../../assets/images/arma-para-videojuegos-libel-studios.jpg',
                type: 'Avanzado',
                name: 'Arma para Videojuegos'
              }, {
                url: '../../../../assets/images/arma-para-videojuegos-libel-studios.jpg',
                type: 'Avanzado',
                name: 'Arma para Videojuegos'
              }, {
                url: '../../../../assets/images/arma-para-videojuegos-libel-studios.jpg',
                type: 'Avanzado',
                name: 'Arma para Videojuegos'
              }, {
                url: '../../../../assets/images/arma-para-videojuegos-libel-studios.jpg',
                type: 'Avanzado',
                name: 'Arma para Videojuegos'
              }

            ]
          }
        ];
        break;
    }
  }

}
