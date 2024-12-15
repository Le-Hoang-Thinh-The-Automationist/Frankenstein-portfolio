import HomeCard from './HomeCard';

type CardContainerProps = {
  products: any[];
}


const CardContainer : React.FC<CardContainerProps> = ({ products }) => {
  return (
    <section className='py-5' id="shop">
      <h4 style={{textAlign: "center"}}>Our products</h4>
      <div className='container px-4 px-lg-5 mt-5'>
        <div className='row justify-content-center'>
          {products.map(product => <HomeCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
}

export default CardContainer;
