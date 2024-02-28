/* eslint-disable react/prop-types */
import './Title.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";



const Title = ({name, link}) => {
    return (
        <div className='section-title'>
            <h3>{name}</h3>
            <button >আরো  <MdOutlineArrowForwardIos /> </button>
        </div>
    );
};

export default Title;