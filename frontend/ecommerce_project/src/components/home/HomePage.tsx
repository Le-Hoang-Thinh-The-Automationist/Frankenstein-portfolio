import Header from './Header'
import CardContainer from './CardContainer'
import api from '../../api';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect( () => {
      
      // Fetch the data from the http://${api}/products
      api.get("products")
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })

      // If there is an error, catch it
      .catch(err => {
        console.log(err.message)
      }) 


    }, [] )

  return (
    <>
      <Header />
      <CardContainer products={products}/>
    </>
  )
}

export default HomePage
