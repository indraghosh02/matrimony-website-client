import Counter from "../../../Component/Home/Counter";
import HowItWorks from "../../../Component/Home/HowItWorks";
import MarriageReview from "../../../Component/Home/MarriageReview";
import PremiumBiodatas from "../../../Component/Home/PremiumBiodatas";
import Slider from "../../Slider/Slider";


const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <PremiumBiodatas></PremiumBiodatas>
          <HowItWorks></HowItWorks>
          <Counter></Counter>
          <MarriageReview></MarriageReview>
        </div>
    );
};

export default Home;