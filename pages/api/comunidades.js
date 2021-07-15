import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

  if (request.method === 'POST') {

    const TOKEN = "8e76d3b066042b0af0f8ee1247f89f"; //full access
    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      itemType: "967802",
      ...request.body,
    })
    console.log(registroCriado)
    
    response.json({
      registroCriado: registroCriado, 
    })

    return  ;
  } 

}