import Skeleton from "react-loading-skeleton";
import ImagePlaceholder from "../assets/images/image.json"
import Lottie from "lottie-react";


const RecentNewsSkeleton = () => {
    return (
        <section>
            {
                 Array.from({length:3}).map( (item, index) =>{
                    return(
                        <div key={index} className='d-flex align-items-center'>
                            <div className="w-75">
                                <Skeleton count={3} />
                            </div>
                            <div className="w-25" >
                                <Lottie animationData= {ImagePlaceholder} loop={true} />
                            </div>
                        </div>
                    )
                 } )
            }
            
        </section>
    );
};

export default RecentNewsSkeleton;