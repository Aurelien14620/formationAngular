import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { fakeClients } from './fake-clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: Client[];
  constructor() {
    this.collection = fakeClients;
  }

  // get collection
  public get collection() {
    return this.pCollection;
  }

  // set collection
  public set collection(col: Client[]) {
    this.pCollection = col;
  }

  // update item in collection
  public update(item: Client, state: StateClient) {
    console.log(item);
    item.state = state;
    console.log(item);
  }
}
