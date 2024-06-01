import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  mb-4 text-red-600">About Us</h2>
          <p className="text-lg text-gray-600">
            Welcome to Love Line, where we help you find your perfect match.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            {/* <img
              src="https://via.placeholder.com/600x400"
              alt="About Us"
              className="w-full rounded-lg shadow-lg"
            /> */}
                <div className="relative flex items-center justify-center w-full dark:text-gray-900">
	<button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50">
		<svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
	<div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://i.ibb.co/WzL8Lzh/1re.jpg" alt="Image 1" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://i.ibb.co/LzY0wf6/Caure.jpg" alt="Image 2" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://i.ibb.co/Kj5c4xY/77pture.jpg" alt="Image 3" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://i.ibb.co/SJ2CDxY/ypture.jpg" alt="Image 4" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://i.ibb.co/6JTLtg2/yyre.jpg" alt="Image 5" />
		</div>
	</div>
	<button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50">
		<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
</div>





          </div>
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
            Love Line is dedicated to helping singles find the love of their lives. With a vast database of profiles, we provide a user-friendly platform for individuals to connect, interact, and build meaningful relationships.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to offer a safe and secure environment for our members to find their soulmate. We believe in the importance of compatibility and use advanced algorithms to suggest the best matches for you.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Join us today and take the first step towards a fulfilling and happy future with your perfect partner. Our success stories are a testament to the effectiveness of our platform and the dedication we put into making sure you find your match.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
