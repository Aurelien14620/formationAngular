import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';

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
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.route.data.subscribe((donnees) => {
      console.log(donnees);
      this.title = donnees.title;
      this.label = donnees.label;
    });

  }

  public add(item: Prestation) {
    this.prestationService.add(item);
    //this.router.navigate(['prestations']);

    //redirection relative par rapport à la route sur laquelle vous êtes.
    this.router.navigate(['../'], { relativeTo: this.route });

    //this.router.navigate(['prestations/edit', item.id]);
  }
}
