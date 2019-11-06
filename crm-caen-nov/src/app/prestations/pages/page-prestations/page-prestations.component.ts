import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  public collection: Prestation[];
  public headers = [ 'Type', 'Client' , 'NbJours', 'TjmHT', 'Total HT', 'Total TTC', 'State'];

  constructor(
    private prestationService: PrestationsService) { }

  ngOnInit() {
    this.collection = this.prestationService.collection;
    console.log(this.prestationService.collection);
  }

}
