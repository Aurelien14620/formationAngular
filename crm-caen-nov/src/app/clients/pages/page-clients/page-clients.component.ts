import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientsService } from 'src/app/prestations/services/clients.service';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {

  public collection: Client[];
  public headersClient = [ 'Name', 'Email' , 'State'];
  public states = Object.values(StateClient);
  public title: string;
  public label: string;
  public labelBtn: string;
  public routeBtn: string;

  constructor(
    private clientService: ClientsService) { }

  ngOnInit() {
    this.collection = this.clientService.collection;
    this.title = 'Clients';
    this.label = 'Tous les clients';
    this.labelBtn = 'Ajouter un client';
    this.routeBtn = 'add';
    console.log(this.clientService.collection);
  }

  public update(item: any, event) {
    //console.log(item, event.target.value);
    this.clientService.update(item, event.target.value);
  }


}
