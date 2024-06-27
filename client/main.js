import { tiger } from './lib/index.js'

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';


const response = await tiger.get(ENDPOINT);

console.log(response.data)