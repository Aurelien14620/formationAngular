import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-prestations',
  templateUrl: './page-add-prestations.component.html',
  styleUrls: ['./page-add-prestations.component.scss']
})
export class PageAddPrestationsComponent implements OnInit {
  public title: string;
  public label: string;
  constructor(
    private prestationService: PrestationsService,
    private route: ActivatedRoute
  ) {

   }

  ngOnInit() {
    this.route.data.subscribe((donnees) => {
      console.log(donnees);
      this.title = donnees.title;
      this.label = donnees.label;
    });

}
}
