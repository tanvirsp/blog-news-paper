/* eslint-disable react/prop-types */
import './NewsGroupCard.css'
import OneAndHalfSkeleton from "../../skeletons/OneAndHalfSkeleton";
import AuthorAndDateCard from "../AuthorAndDateCard/AuthorAndDateCard";

const SevenNewsGroupCard = ({news}) => {
    return (
        <div>
            {
                news === null ? <OneAndHalfSkeleton /> : 
                   news.length === 0 ? <h6>এই মূহুর্তে কোন খবর নেই</h6> : (
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className='card-big'>
                                <img className='img-fluid' src={news[0]["image"]} alt="" />
                                <h5>{news[0]["title"]}</h5>
                                <AuthorAndDateCard news ={news[0]}  />
                            </div>
                        </div>
                        <div className="col-md-6">
                            {
                                news.slice(1 , news.length).map( (item, index) =>{
                                    return (
                                        <div key={index} className='py-1  border-bottom'>
                                            <h5>{item["title"]}</h5> 
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                )
            }
            
        </div>
    );
};

export default SevenNewsGroupCard;