import './Binodon.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';


const Binodon = () => {
    return (
        <div >
            <div className='binodon-title'>
                <h3>বিনোদন</h3>
            </div>
            <Swiper
                effect={'coverflow'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow,Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/LvmG9xL/01-6.jpg" />
                    <div className='slider-container'>
                        <h5>চতুর্থ নিউজ জামালপুরে উদ্ধার হওয়া তাজা মর্টার শেল বিস্ফোরণ ঘটিয়ে নিষ্ক্রিয়</h5>
                    </div>
                    <div className='slider-overlay'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/LvmG9xL/01-6.jpg" />
                    <div className='slider-overlay'></div>
                    <div className='slider-container'>
                        <h5>চতুর্থ নিউজ জামালপুরে উদ্ধার হওয়া তাজা মর্টার শেল বিস্ফোরণ ঘটিয়ে নিষ্ক্রিয়</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/LvmG9xL/01-6.jpg" />
                    <div className='slider-overlay'></div>
                    <div className='slider-container'>
                        <h5>চতুর্থ নিউজ জামালপুরে উদ্ধার হওয়া তাজা মর্টার শেল বিস্ফোরণ ঘটিয়ে নিষ্ক্রিয়</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/LvmG9xL/01-6.jpg" />
                    <div className='slider-overlay'></div>
                    <div className='slider-container'>
                        <h5>চতুর্থ নিউজ জামালপুরে উদ্ধার হওয়া তাজা মর্টার শেল বিস্ফোরণ ঘটিয়ে নিষ্ক্রিয়</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/LvmG9xL/01-6.jpg" />
                    <div className='slider-overlay'></div>
                    <div className='slider-container'>
                        <h5>চতুর্থ নিউজ জামালপুরে উদ্ধার হওয়া তাজা মর্টার শেল বিস্ফোরণ ঘটিয়ে নিষ্ক্রিয়</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/LvmG9xL/01-6.jpg" />
                    <div className='slider-overlay'></div>
                    <div className='slider-container'>
                        <h5>চতুর্থ নিউজ জামালপুরে উদ্ধার হওয়া তাজা মর্টার শেল বিস্ফোরণ ঘটিয়ে নিষ্ক্রিয়</h5>
                    </div>
                </SwiperSlide>
                
                
            </Swiper>
        </div>
    );
};

export default Binodon;