import React from 'react'
import  {data}  from './fakedata.jsx'
import Product from './Product.jsx'
import './Product.css'

const Products = () => {
  return (
    <div className='allproduct'>
        {
           data.products.map((p)=>{
            return (
                <div>
                    <Product singlep={p}/>
                </div>
            )
           })
        }
    </div>
  )
}

export default Products