import { client } from './client.js';

export async function getMovies() {
  const response = await client.from('movies').select('*');
  return response.data; 
}

export async function getCats() {
  const response = await client.from('cats').select('*');
  return response.data;
}