import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public version$: BehaviorSubject<number>;
  //public title2: string;
  constructor(
    private vs: VersionService
  ) {
    //this.title2 = 'test';
   }

  ngOnInit() {
    this.version$ = this.vs.version$;
    //this.title2 = 'test2';
  }

  upgradeVersion(){
    this.vs.upgrade();
  }
}
