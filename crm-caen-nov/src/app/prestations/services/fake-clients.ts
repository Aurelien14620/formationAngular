import { Client } from 'src/app/shared/models/client';

export const fakeClients: Client[] = [

new Client({
  id: 'un',
  name: 'Modis',
  email: 'contact@modis.fr'
}),

new Client({
  id: 'deux',
  name: 'Cap Gemini',
  email: 'contact@capgemini.fr'

})
];
