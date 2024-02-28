import './TopNews.css';
import TopNewsSkeleton from "../../skeletons/TopNewsSkeleton";
import NewsStore from "../../store/NewsStore";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopNews = () => {
    const [active, setActive] = useState(false);
    const {TopNews } = NewsStore();
    
    const navigator = useNavigate();
    


    return (
        <div>
            <div className='section-title-1'>
                <h5>ব্রেকিং নিউজ</h5>
             </div>
        
            <div className='slider-news-container'  >
                
                {
                    TopNews === null ? <TopNewsSkeleton /> : (
                        <>
                        <ul className={active? "slider-news slider-news-push ": " slider-news "} onMouseOver={(() =>setActive(true))}   onMouseOut={ ()=>setActive(false)  }  >
                            {
                                TopNews.map( (item, index) => <li onClick={() =>navigator(`/details/${item["_id"]}`)}  key={index} ><h5>{item["title"]}</h5></li>)
                            }
                        </ul>
                        <ul className={active? "slider-news slider-news-push ": " slider-news "} onMouseOver={(() =>setActive(true))}   onMouseOut={ ()=>setActive(false)  }  >
                        {
                            TopNews.map( (item, index) => <li key={index} ><h5>{item["title"]}</h5></li>)
                        }
                        </ul>
                    </>   
                    )
                }
            </div>
        </div>
    );
};

export default TopNews;