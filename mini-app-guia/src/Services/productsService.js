import axios from 'axios';


export const getAllProducts = async () => {
const BASE_URL = 'https://fakestoreapi.com';

  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data; // Devuelve el array de productos
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};