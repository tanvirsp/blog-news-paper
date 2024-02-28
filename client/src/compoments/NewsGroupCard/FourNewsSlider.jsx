/* eslint-disable react/prop-types */
import Slider from "react-slick";
import BoxNewsSkeleton from "../../skeletons/BoxNewsSkeleton";
import NewsCardTwo from "../NewsCardTwo/NewsCardTwo";


const FourNewsSlider = ({news}) => {
    
    

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
     
    
      };

    return (
        <div>
            {
                news === null ? <BoxNewsSkeleton /> : 
                    news.length === 0 ? <h5>এই মূহুর্তে কোন নিউজ নেই</h5> : (
                        <Slider {...settings}>
                        {
                            news.map( (data, index)=><NewsCardTwo key={index} data={data} /> )
                        }
                        </Slider>
                    ) 
                       
                    
                }
        </div>
    );
};

export default FourNewsSlider;