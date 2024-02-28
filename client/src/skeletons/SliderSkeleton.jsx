import Lottie from "lottie-react";
import Skeleton from "react-loading-skeleton";
import ImagePlaceholder from "../assets/images/image.json"


const SliderSkeleton = () => {
    return (
        <div className="text-center">
             <Lottie className="w-50" animationData= {ImagePlaceholder} loop={true} />
             <div>
                <Skeleton count={2} />
                
             </div>
        </div>
          
 
    );
};

export default SliderSkeleton;