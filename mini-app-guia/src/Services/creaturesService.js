import axios from 'axios';


export const getAllCreatures = async () => {
const BASE_URL = 'https://www.dnd5eapi.co/api/monsters';

  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data; // Devuelve el array de productos
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};