import SearchButton from "../../../component/SearchButton";
import Banner from "./Banner";
import Features from "./Features";
import Graduate from "./Graduate";
import NewsLetter from "./NewsLetter";
import Review from "./Review";
import ThreeCard from "./ThreeCard";


const Home = () => {
    return (
        <div>
            <SearchButton></SearchButton>
            <Banner></Banner> 
            <ThreeCard></ThreeCard> 
            <Graduate></Graduate>   
            <Features></Features>
            <Review></Review>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;