
const Header = () => {
  return (
    <header className='py-5' style={{backgroundColor :"#6050DC"}}>
        <div className='container px-4 px-lg-4 my-5'>
            <div className='text-center text-white'>
                <h1 className='display-4 fw-bold'>Welcome to your favorite Store</h1>
                <p className='lead fw-normal text-white-75 mb-4'>Discover the latest trends with our modern collection</p>
                <a href='#shop' className='btn btn-light btn-lg rounded-pill px-4 py-2'>Shop now</a>
            </div>
        </div>
    </header>
  );
}

export default Header;
