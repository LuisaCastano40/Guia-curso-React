import axios from 'axios';


export const getAllMovies = async () => {
const BASE_URL = 'https://ghibliapi.vercel.app/films';

  try {
    const response = await axios.get(BASE_URL);
    console.log(response)
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};