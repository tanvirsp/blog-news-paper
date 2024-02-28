import RecentNewsSkeleton from "../../skeletons/RecentNewsSkeleton";
import NewsStore from "../../store/NewsStore";
import NewsCardOne from "../NewsCardOne/NewsCardOne";
import './LatestNews.css';


const LatestNews = () => {
    const {RecentNews} = NewsStore();

    return (
        <div>
            <div className='section-title-1'>
            <h5>সর্বশেষ খবর</h5>
            </div>
            <div className='top-right-container'>
                
                {
                    RecentNews === null ? <RecentNewsSkeleton />  : (
                        RecentNews.map( (news, index) => <NewsCardOne key={index} news={news} /> )
                    )
                } 
            </div>
        </div>
    );
};

export default LatestNews;