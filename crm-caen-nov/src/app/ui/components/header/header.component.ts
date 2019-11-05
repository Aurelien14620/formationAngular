import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = 'Nikki\'s app';
  //public title2: string;
  constructor() {
    //this.title2 = 'test';
   }

  ngOnInit() {
    //this.title2 = 'test2';
  }

}
