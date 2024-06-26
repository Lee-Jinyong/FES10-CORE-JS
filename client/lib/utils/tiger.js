const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const tiger = async (url) => {
  const response = await fetch(url);

  let data

  if(response.ok) {
    response.data = await response.json();
  }

  return response;
}

const result = await tiger(ENDPOINT)

console.log(result.data);

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