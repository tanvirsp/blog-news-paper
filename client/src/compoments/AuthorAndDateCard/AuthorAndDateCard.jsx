/* eslint-disable react/prop-types */
import { CiCalendar, CiUser } from 'react-icons/ci';
import './AuthorAndDateCard.css'

const AuthorAndDateCard = ({news}) => {

    const {createdAt, author} = news;
    
    // English date
    const englishDate = new Date(createdAt);
    // Options for formatting in Bengali (Bn is the ISO 639-1 language code for Bengali)
        const options = { year: "numeric", month: "long", day: "numeric" };
        const bengaliDate = new Intl.DateTimeFormat("bn-IN", options).format( englishDate);
     



    return (
        <div className='date'>
            <small><CiUser /> {author} </small>
            <small className='ps-3'><CiCalendar  /> {bengaliDate}</small>
        </div>
    );
};

export default AuthorAndDateCard;