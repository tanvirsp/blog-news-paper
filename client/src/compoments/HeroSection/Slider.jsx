import { Carousel } from "react-bootstrap";
import NewsStore from "../../store/NewsStore";
import SliderSkeleton from "../../skeletons/SliderSkeleton";
import { useNavigate } from "react-router-dom";




const Slider = () => {
    const {TopNews} = NewsStore();
     
    const navigator = useNavigate();
    return (
        <Carousel>
            {
                TopNews == null ?  <SliderSkeleton /> :  (
                    TopNews.map ((item, index) =>(
                        <Carousel.Item onClick={() =>navigator(`/details/${item["_id"]}`)}  key={index}>
                            <div className="slider-image-overlay"></div>
                            <img   className="d-block w-100 " src={item["image"]} alt="Picture" />
                            <Carousel.Caption>
                                <small className="category-tag">{item["category"]}</small>
                                <h4>{item["title"]}</h4>
                            </Carousel.Caption> 
                        </Carousel.Item>
                    ))
                )
            }
            
           
            
            
        </Carousel>
    );
};

export default Slider;