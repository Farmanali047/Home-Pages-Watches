import Header from "../Components/Header";
import TheArt from "../Components/TheArt";
import ExploreWorld from "../Components/ExploreWorld";
import Main from "../Components/Main";
import Bags from "../Components/bag";
import TreasureTroves from "../Components/TreasureTroves";
import CenteredTextWithVideoBackground from "../Components/CenteredTextWithVideoBackground";
import GoyardGazette from "../Components/GoyardGazette";
import Footer from "../Components/Footer";
import SliderComponent from "../Components/SliderComponent";
const Home = () => {
    return ( 
        <div>
          <Header></Header>
          <Main></Main>
          <Bags></Bags>
          <ExploreWorld></ExploreWorld>
          <TheArt></TheArt>
          <CenteredTextWithVideoBackground></CenteredTextWithVideoBackground>
          <TreasureTroves></TreasureTroves>
          <GoyardGazette></GoyardGazette>
          <SliderComponent></SliderComponent>
          <Footer></Footer>
      
        
          
        </div>
     );
}
 
export default Home;
