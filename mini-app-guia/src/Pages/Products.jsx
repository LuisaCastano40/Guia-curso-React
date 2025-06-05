import React, { useEffect } from 'react'
import { getAllCreatures } from '../Services/creaturesService.js'
import { getAllProducts } from '../Services/productsService.js'
import { getAllMovies } from '../Services/movieService.js'


export default function Products() {

  useEffect(()=>{
    getAllCreatures();
    getAllMovies();
    getAllProducts();
  },[]);
  return (
    <div className="">

      
    </div>
  )
}
