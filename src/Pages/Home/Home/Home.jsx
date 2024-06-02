import Counter from "../../../Component/Home/Counter";
import MarriageReview from "../../../Component/Home/MarriageReview";
import Slider from "../../Slider/Slider";


const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <Counter></Counter>
          <MarriageReview></MarriageReview>
        </div>
    );
};

export default Home;