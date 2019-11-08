import { Component, OnInit, Output } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-prestations',
  templateUrl: './page-edit-prestations.component.html',
  styleUrls: ['./page-edit-prestations.component.scss']
})
export class PageEditPrestationsComponent implements OnInit {

  public id: string;
  public item$: Observable<Prestation>;
  public title: string;
  public label: string;
  private routeSub: Subscription;

  constructor(
    private prestationService: PrestationsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /*ngOnInit() {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.prestationService.getPrestation(params.get('id'))
      })

    );
  }*/

  ngOnInit() {
    this.route.data.subscribe((donnees) => {
      this.title = donnees.title;
      this.label = donnees.label;
    });

    this.routeSub = this.route.params.subscribe(params => {
      this.item$ = this.prestationService.getPrestation(params['id']);
      this.id = params['id'];
    });
  }

  public edit(item: any) {

    //res étant la réponse de l'api

    item.id = this.id;
    //redirection relative par rapport à la route sur laquelle vous êtes.
    this.prestationService.update(item).then((res) => {
      this.router.navigate(['prestations']);
    });
  }
  //this.router.navigate(['prestations']);
  //this.router.navigate(['prestations/edit', item.id]);


}
