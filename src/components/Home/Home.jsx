import React from 'react'
import Products from '../Products/Products'

const Home = () => {
  return (
    <div>
      <h2 className='mt-4 heading text-center'>Welcome to the Redux toolkit store</h2>
      <section className='ml-3'>
        <h3>Products</h3>
        <hr />
        <Products />
      </section>
    </div>
  )
}

export default Home