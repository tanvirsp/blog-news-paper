import { useEffect } from "react";
import NewsStore from "../store/NewsStore";
import HeroSection from "../compoments/HeroSection/HeroSection";
import Title from "../compoments/Title/Title";
import SevenNewsFullSectionGroupCard from "../compoments/NewsGroupCard/SevenNewsFullSectionGroupCard";
import SevenNewsGroupCard from "../compoments/NewsGroupCard/SevenNewsGroupCard";
import adOne from "../assets/images/ad1.jpg"
import adTwo from "../assets/images/ad2.jpg"
import adThree from "../assets/images/ad3.gif"
import FourNewsSlider from "../compoments/NewsGroupCard/FourNewsSlider";
import NewsAndSlider from "../compoments/NewsGroupCard/NewsAndSlider";
import Binodon from "../compoments/Binodon/Binodon";



const Home = () => {
    const {RecentNewsRequest, SaradeshNews, SportsNews,  NationalNews, InternationalNews, ProblemAndProspectsNews,
        TopNewsRequest, SaradeshNewsRequest, NationalNewsRequest, SportsNewsRequest, 
        ProblemAndProspectsNewsRequest, InternationalNewsRequest} = NewsStore();
    

    useEffect( ()=>{
        (async()=>{
            await RecentNewsRequest();
            await TopNewsRequest();
            await SaradeshNewsRequest();
            await NationalNewsRequest();
            await  ProblemAndProspectsNewsRequest();
            await  InternationalNewsRequest();
            await  SportsNewsRequest();

        })()
    }, [])



    
    return (
        <>
            <HeroSection />
            <div className="container">
                <section>
                    <div className="row">
                        <div className="col-md-10 bg-light">
                                <Title name="সারাদেশ" link="#" />
                                <SevenNewsFullSectionGroupCard news={SaradeshNews} />
                                <br />
                           
                                <Title name="জাতীয়" link="#" />
                                <FourNewsSlider news={NationalNews} />
                        </div>
                        <div className="col-md-2">
                            <img className="ad-one" src={adOne} alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row">
                        {/* Right Side Tall Ad */}
                        <div className="text-center">
                            <img width="65%" src={adTwo} alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row mt-3">
                        <div className="col-md-6 border-end">
                            <Title name="সমস্যা ও সম্ভাবনা" link="#" />
                            <SevenNewsGroupCard news ={ProblemAndProspectsNews}  />    
                        </div>
                        <div className="col-md-6">
                            <Title name="আন্তর্জাতিক" link="#" />
                            <SevenNewsGroupCard news ={InternationalNews}  />  
                        </div>
                    </div> 
                </section>
                <section>
                    <div className="row">
                        <div className="col-md-9">
                            <Title name="খেলাধুলা" link="#" />
                            <NewsAndSlider news={SportsNews} />
                        </div>
                        <div className="col-md-3">
                            <img width="100%" src={adThree} alt="Ad Three" />
                        </div>
                    </div>
                </section>
            </div>
            <section className="bg-light">
                <div className="container">
                    <div className="row">
                        <Binodon />
                    </div>
                </div>
            </section>
            
            
            
        
            
        </>
    );
};

export default Home;