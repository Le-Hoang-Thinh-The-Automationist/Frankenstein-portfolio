import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='py-3' style={{backgroundColor: "#6050DC", color: 'white'}}>
    <div className='container text-center'>
      {/* Quick Links Section */}
      <div className='mb-2'>
        <a href='#' className='text-white text-decoration-none mx-2'>Home</a>
        <a href='#' className='text-white text-decoration-none mx-2'>About</a>
        <a href='#' className='text-white text-decoration-none mx-2'>Shop</a>
        <a href='#' className='text-white text-decoration-none mx-2'>Contact</a>
      </div>

      {/* Social media icon section */}
      <div className='mb-2'>
        <a href='#' className='text-white mx-2'><FaFacebook/></a>
        <a href='#' className='text-white mx-2'><FaTwitter/></a>
        <a href='#' className='text-white mx-2'><FaInstagram /></a>
      </div>

      {/* Copy right section */}
      <p className='small mb-0'>&copy; 2024 Shopit</p>
    </div>
    </footer>
  )
}

export default Footer
