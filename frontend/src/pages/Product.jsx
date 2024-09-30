import React from 'react'
import { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductId from '../components/ProductId'
import ProductDisplay from '../components/ProductDisplay'

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e) => e.id === Number(productId))
  if(!product){
    return(
      <div>Product not found!</div>
    )
  }

  return (
    <section>
      <div>
        <ProductId product={product}/>
        <ProductDisplay product={product}/>
        <ProductDescription product={product}/>
      </div>    
    </section>
  )
}

export default Product