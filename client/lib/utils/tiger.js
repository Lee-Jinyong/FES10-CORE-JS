const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

export const tiger = async (options) => {

  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
  headers: {
    ...defaultOptions.headers,
    ...options.headers
  }}

  const response = await fetch(url, restOptions);

  if(response.ok) {
    response.data = await response.json();
  }

  return response;
}

// const result = await tiger('POST', ENDPOINT, {name: 'tiger'});
// const result = await tiger('DELETE', `${ENDPOINT}/3`);
// const result = await tiger({url: ENDPOINT});


tiger.get = (url, options) => {
  return tiger({
    url,
    ...options
  })
}

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    ...options,
    body:JSON.stringify(body),
  })
}

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options
  })
}

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    ...options,
    body:JSON.stringify(body),
  })
}

tiger.patch = (url, body, options) => {
  return tiger({
    method: 'PATCH',
    url,
    ...options,
    body:JSON.stringify(body),
  })
}


// const result = await tiger.get(ENDPOINT);

// console.log(result);


/* ---------------------------------- IIAFE --------------------------------- */
// (async function() {
//   const tiger = async () => {
//     const response = await fetch(ENDPOINT);
  
//     let data
  
//     if(response.ok) {
//       data = await response.json();
//     }
  
//     return data;
//   }
  
//   console.log(await tiger());
// })()
/* -------------------------------------------------------------------------- */