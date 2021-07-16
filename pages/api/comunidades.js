import { SiteClient } from 'datocms-client';
import tokens from '../../config.js';

export default async function recebedorDeRequests(request, response) {

  if (request.method === 'POST') {

    const TOKEN = tokens.FULL_ACCESS; //full access
    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      itemType: "967802",
      ...request.body,
    })

    response.json({
      registroCriado: registroCriado, 
    })

    return  ;
  } 

}