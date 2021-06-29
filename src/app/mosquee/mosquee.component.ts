import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mosquee',
  templateUrl: './mosquee.component.html',
  styleUrls: ['./mosquee.component.css']
})
export class MosqueeComponent implements OnInit {
  images = [];
  constructor() { }

  ngOnInit() {
    this.images = [
      "assets/img/coran.png",
      "assets/img/fotolia.jpg",
      "assets/img/logo1.png",
      "assets/img/logo2.jpg",
    ];
  }

}
