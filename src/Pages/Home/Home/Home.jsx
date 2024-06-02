import Counter from "../../../Component/Home/Counter";
import HowItWorks from "../../../Component/Home/HowItWorks";
import MarriageReview from "../../../Component/Home/MarriageReview";
import Slider from "../../Slider/Slider";


const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <HowItWorks></HowItWorks>
          <Counter></Counter>
          <MarriageReview></MarriageReview>
        </div>
    );
};

export default Home;