/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import AuthorAndDateCard from '../AuthorAndDateCard/AuthorAndDateCard';
import './NewsCardOne.css'


const NewsCardOne = ({news}) => {
    const {title, image, _id} = news;

    const navigator = useNavigate();


// পাশাপাশি নিউজ কার্ড
    return (
        <div className='news-card-one' onClick={() =>navigator(`/details/${_id}`)} >
            <div>
                <h5>{title}</h5>
                <AuthorAndDateCard  news={news} />
            </div>
            <div className='news-card-one-img'>
                <img src={image} alt="Image" />
            </div>
        </div>
    );
};

export default NewsCardOne;