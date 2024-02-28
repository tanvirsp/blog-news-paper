/* eslint-disable react/prop-types */
import Slider from "react-slick";
import './NewsGroupCard.css';
import OneAndHalfSkeleton from "../../skeletons/OneAndHalfSkeleton";
import AuthorAndDateCard from "../AuthorAndDateCard/AuthorAndDateCard";
import NewsCardOne from "../NewsCardOne/NewsCardOne";


const NewsAndSlider = ({news}) => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        pauseOnHover: true,
  
      };


    return (
        <div className="my-3" >
            {
                    news === null ? <OneAndHalfSkeleton /> : 
                        news.length === 0 ? <h6>এই মূহুর্তে কোন খবর নেই</h6> : (
                            <div className="row">
                                <div className="col-md-7">
                                    <Slider {...settings}>
                                        {
                                            news.map( (item, index) =>{
                                                return (
                                                    <div className="card-news-slider" key={index}>
                                                        <div className="slider-overlay"></div>
                                                        <img className="img-fluid rounded " src={item["image"]} alt="" />
                                                        <div className="card-news-slider-info">
                                                            <h4>{item["title"]}</h4>
                                                            <AuthorAndDateCard news={item}/>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }      
                                    </Slider>
                                </div>
                                <div className="col-md-5"> 
                                    <div className="card-news">
                                        {
                                        news.map( (item, index) =>  <NewsCardOne key={index} news={item}/>  )
                                        } 
                                    </div>

                                        
                                
                                </div>
                            </div>
                        )
                            
            }
           
        </div>
    );
};

export default NewsAndSlider;


