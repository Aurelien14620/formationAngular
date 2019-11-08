import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
}
