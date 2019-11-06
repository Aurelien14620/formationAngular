import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { Prestation } from '../models/prestation';
import { State } from '../enums/state.enum';
import { analyzeNgModules } from '@angular/compiler';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') hostAttr: string;
  constructor() {
  }
  ngOnChanges() {
    //console.log(this.appState);
    this.hostAttr = this.formatClass(this.appState);
  }

  private formatClass(state: any): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()
      }`;
  }
}

//appState vaut Annulé => state-annule
//appState vaut Option => state-option
//appState vaut Confirmé => state-confirme
//on veut binder l'attrribut class du host elment td avec ce string
