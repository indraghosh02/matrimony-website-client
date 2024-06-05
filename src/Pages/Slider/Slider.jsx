import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import '../Slider/Slider.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="flex justify-center items-center w-full h-full mt-10 mb-10">
      <div className="w-full md:w-5/6">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
          <div className=" relative slide slide1 ">
          <div className="content ">
                <h2 className="text-5xl text-red-600 font-extrabold font-serif">Most Trusted Marriage Media </h2>
                <p className="text-white font-semibold text-2xl">Navigate the wonderful matrimonial journey with Love-Link,
the leading matrimony site </p>
<br />
                <Link to="/biodata">
                  <button className="bg-red-600 text-white px-4 py-2 rounded ">See All Biodatas</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative slide slide2">
            <div className="content">
                <h2 className="text-5xl text-red-600 font-extrabold font-serif">Most Trusted Marriage Media </h2>
                <p className="text-white font-semibold text-2xl">Navigate the wonderful matrimonial journey with Love-Link,
the leading matrimony site </p>
<br />
                <Link to="/biodata">
                  <button className="bg-red-600 text-white px-4 py-2 rounded ">See All Biodatas</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className=" relative slide slide3">
            <div className="content">
                <h2 className="text-5xl text-red-600 font-extrabold font-serif">Most Trusted Marriage Media </h2>
                <p className="text-white font-semibold text-2xl">Navigate the wonderful matrimonial journey with Love-Link,
the leading matrimony site </p>
<br />
                <Link to="/biodata">
                  <button className="bg-red-600 text-white px-4 py-2 rounded ">See All Biodatas</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className=" relative slide slide4">
              <div className="content">
                <h2 className="text-5xl text-red-600 font-extrabold font-serif">Most Trusted Marriage Media </h2>
                <p className="text-white font-semibold text-2xl">Navigate the wonderful matrimonial journey with Love-Link,
the leading matrimony site </p>
<br />
                <Link to="/biodata">
                  <button className="bg-red-600 text-white px-4 py-2 rounded ">See All Biodatas</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
