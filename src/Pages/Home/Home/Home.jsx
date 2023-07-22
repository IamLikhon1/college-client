import SearchButton from "../../../component/SearchButton";
import Banner from "./Banner";
import Graduate from "./Graduate";
import ThreeCard from "./ThreeCard";


const Home = () => {
    return (
        <div>
            <SearchButton></SearchButton>
            <Banner></Banner> 
            <ThreeCard></ThreeCard> 
            <Graduate></Graduate>   
        </div>
    );
};

export default Home;