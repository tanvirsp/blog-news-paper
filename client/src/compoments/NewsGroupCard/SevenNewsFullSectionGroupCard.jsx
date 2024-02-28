/* eslint-disable react/prop-types */

import BigSectionSkeleton from "../../skeletons/BigSectionSkeleton";
import AuthorAndDateCard from "../AuthorAndDateCard/AuthorAndDateCard";
import NewsCardOne from "../NewsCardOne/NewsCardOne";


const SevenNewsFullSectionGroupCard = ({news}) => {
    return (
        <div>
            {
                news === null ? <BigSectionSkeleton /> : 
                    news.length === 0 ? <h6>এই মূহুর্তে কোন খবর নেই</h6> : (
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <div className="card-big">
                                    <img className='img-fluid' src={ news[0]["image"] } alt="" />
                                    <h4 className='mt-2'>{ news[0]["title"] }</h4>
                                    <AuthorAndDateCard news ={ news[0]}  />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                {
                                    news.slice(1, news.length).map( (item, index)=>{
                                        return (
                                            <div key={index} className='col-md-6 '> 
                                                <NewsCardOne news={item} />
                                            </div>
                                        )
                                    } )    
                                }
                                </div>

                            </div> 
                        </div> 
                    )
            }
        </div>
    );
};

export default SevenNewsFullSectionGroupCard;