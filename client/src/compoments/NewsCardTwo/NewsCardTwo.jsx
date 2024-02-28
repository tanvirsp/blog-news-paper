/* eslint-disable react/prop-types */
import './NewsCardTwo.css';


const NewsCardTwo = ({data}) => {
    const {title, image} = data;

    
    //উপরে ছবি নিচে টাইলের
    return (
        <div className='news-card-two'>
            <div>
                <img src={image} alt="Image" />
            </div>
            <h5>{title}</h5>
        </div>
    
    );
};

export default NewsCardTwo;