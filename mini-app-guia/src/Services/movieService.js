import axios from 'axios';


export const getAllMovies = async () => {
const BASE_URL = 'https://ghibliapi.vercel.app/films';

  try {
    const response = await axios.get(BASE_URL);
    return response.data; // Devuelve el array de productos
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};