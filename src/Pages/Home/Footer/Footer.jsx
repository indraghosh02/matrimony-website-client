import '../Footer/Footer.css'
const Footer = () => {
  return (
    <footer className="py-12 footer-background">
      <div className="container mx-auto flex justify-center items-center relative">
        {/* Content */}
        <div className="relative z-10 footer-content text-center">
          {/* Logo and Website Name */}
          <div className="flex flex-col items-center mb-6">
            <img src="https://i.ibb.co/YWq2tYz/5aa5d08e-fa33-4218-ac49-2f67cb49e9c3.jpg" alt="Logo" className="h-10 w-10 mr-2 items-center rounded-full" />
            <h2 className="text-3xl font-semibold items-center text-white"> <span className='text-red-600'> Love </span> Link</h2>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-4 mb-4 footer-content">
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <img src="https://i.ibb.co/6DxsLSb/icons8-facebook-48-1.png" alt="" />
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <img src="https://i.ibb.co/WtzN3gY/icons8-youtube-48.png" alt="" />
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <img src="https://i.ibb.co/G5pFrW3/icons8-twitter-48.png" alt="" />
            </a>
          </div>
          <p className="mt-4 text-white">Subscribe to our newsletter for updates</p>
          <div className="mt-2 flex justify-center items-center">
            <input type="email" placeholder="Enter your email" className="bg-white px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-1" />
            <button className="bg-red-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
