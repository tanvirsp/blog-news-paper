import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json"
import Skeleton from "react-loading-skeleton";


const BoxNewsSkeleton = () => {
    return (
        <div className="row">
        {
            Array.from({length:4}).map ( (item, index) =>{
                return(
                    <div key={index} className="col-md-3">
                        <div >  
                            <Lottie className="w-75"  animationData= {ImagePlaceholder} loop={true} />
                            <div className="w-75">
                                <Skeleton count={3} />
                            </div>
                        </div>  
                    </div>
                )
            })
        }
        
    </div>
    );
};

export default BoxNewsSkeleton;