import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides = [
    {
      image:
        'https://www.pushuno.com/images/banner.jpg',
    },
    {
      image:
        'https://owius.com/wp-content/uploads/2019/03/desarrolloweb.png',
    },
    {
      image:
        'https://f.hubspotusercontent10.net/hubfs/4418714/sb-blog-programming.jpg',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
