import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  private pCollection: Prestation[];
  constructor() {
    this.collection = fakePrestations;
  }

  // get collection
  public get collection() {
    return this.pCollection;
  }

  // set collection
  public set collection(col: Prestation[]) {
    this.pCollection = col;
  }

  // update item in collection
  public update(item: Prestation, state: State) {
    console.log(item);
    item.state = state;
    console.log(item);
  }

  // add item in collection
  public add(item: Prestation) {
    this.collection.push(new Prestation(item));
  }

  // delete item in collection

  // get item by id
}
