//fetching data using the web APIs 

// const url =fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));



//POST a resorce

//   const url =('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));



//UPdate a resource

//  const url= fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

  //Deleting a resorce.
//   const url = fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//       id: 1,
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'DELETE',
//       });

      //FILTER

//       const url = fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
  // This will return all the posts that belong to the first user


  //LISTING
// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
// .then((response) => response.json())
// .then((json) => console.log(json));

//Error handling and async function

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   const base_url = 'https://jsonplaceholder.typicode.com/posts/1'

// async function getpatch (){
//     try {
//         let result = await fetch(base_url)
//         let patch = await result.json()

//         return patch;
//     } catch (error) {
//         console.log(error);
//     }
// }


// Async function.
const base_url = fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  
 async function getpatch (){
            let result = await fetch(base_url)
            let patch = await result.json()
            return patch;
        
    }

getpatch()