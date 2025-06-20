import axios from 'axios';

export const getAllProducts = async () => {
const BASE_URL = 'https://fakestoreapi.com/products';

  try {
    const response = await axios.get(BASE_URL);
    console.log(response)
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};