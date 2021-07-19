function fetchFromDato(setComunidades, setDepoimentos, token) {
  fetch(
    'https://graphql.datocms.com/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ query: 
        `{ 
          allCommunities { 
            id, 
            title, 
            imageUrl,
            linkTo,
            creatorSlug
          }
        }`
      }),
    }
  )
  .then(res => res.json())
  .then((res) => {
    setComunidades(res.data.allCommunities);
  })
  .catch((error) => {
    console.log(error);
  });

  fetch(
    'https://graphql.datocms.com/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ query: 
        `{ 
          allDepoimentos { 
            id, 
            title, 
            content,
            crea
          }
        }`
      }),
    }
  )
  .then(res => res.json())
  .then((res) => {
    setDepoimentos(res.data.allDepoimentos);
  })
  .catch((error) => {
    console.log(error);
  });
  
}

export default fetchFromDato