import Header from './Header'
import CardContainer from './CardContainer'
import api from '../../api';
import { useEffect, useState } from 'react';
import PlaceHolderContainer from '../ui/PlaceHolderContainer';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect( () => {
      
      // Fetch the data from the http://${api}/products
      setLoading(true);
      api.get("products").then(res => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      })

      // If there is an error, catch it
      .catch(err => {
        console.log(err.message)
        setLoading(false);
      }) 


    }, [] )

  return (
    <>
      <Header />
      {!loading ? <PlaceHolderContainer /> : <CardContainer products={products}/>}
      
    </>
  )
}

export default HomePage
