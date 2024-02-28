import './HeroSection.css';
import Slider from './Slider';
import TopNews from '../TopNews/TopNews';
import LatestNews from '../LatestNews/LatestNews';



const HeroSection = () => {


    return (
        <section className="container">
            <div className="row">
                <div className="col-md-3" >
                    <TopNews />   
                </div>
                <div className="col-md-5 ">
                    <Slider  />
 
                </div>
                <div className="col-md-4">
                    <LatestNews />
    
                </div>
            </div>
            
        </section>
    );
};

export default HeroSection;