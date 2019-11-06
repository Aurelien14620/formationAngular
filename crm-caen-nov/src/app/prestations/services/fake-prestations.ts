import { Prestation } from 'src/app/shared/models/prestation';

export const fakePrestations: Prestation[] = [

  new Prestation({
    id: 'lskjdfm',
    typePresta: 'coaching',
    client: 'Modis',
    nbJours: 20,
    tjmHt: 1200,
    comment: 'Merci monsieur Modis pour les 1.2k jour'
  }),
  new Prestation({
    typePresta: 'formation',
    client: 'M2i',
    nbJours: 5,
    tjmHt: 600,
    comment: 'Merci madame M2i pour les 600 jour qui me permettront de partir en vacances aux maldives'
  }),

];
