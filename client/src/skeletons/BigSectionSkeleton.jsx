import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json"
import Skeleton from "react-loading-skeleton";

const BigSectionSkeleton = () => {
    return (
        <section className="container">
            <div className="row my-4">
                <div className="col-md-4">
                    <Lottie className="w-75" animationData= {ImagePlaceholder} loop={true} />
                    <Skeleton count={1} />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        {
                            Array.from({length:6}).map ( (item, index) =>{
                                return(
                                    <div key={index} className="col-md-6">
                                        <div className="d-flex">  
                                            <Lottie className="w-25"  animationData= {ImagePlaceholder} loop={true} />
                                            <div className="w-75">
                                                <Skeleton count={3} />
                                            </div>
                                        </div>  
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BigSectionSkeleton;