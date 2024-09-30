import React from 'react'
import {TbArrowRight} from 'react-icons/tb'
import ProductDisplay from './ProductDisplay';

const ProductId = (props) => {
  const {product} = props;

  return (
    <div className=''>
        Home <TbArrowRight /> Shop <TbArrowRight /> {product.category} <TbArrowRight /> {product.name}
    </div>
    
  )
}

export default ProductId