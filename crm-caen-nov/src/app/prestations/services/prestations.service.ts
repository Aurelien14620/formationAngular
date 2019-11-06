import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';

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

  // add item in collection

  // delete item in collection

  // get item by id
}
