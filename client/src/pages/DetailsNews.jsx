import { useParams } from "react-router-dom";
import NewsStore from "../store/NewsStore";
import { useEffect } from "react";
import { CiCalendar, CiUser, CiRead  } from 'react-icons/ci';
import RecentNewsSkeleton from "../skeletons/RecentNewsSkeleton";
import NewsCardOne from "../compoments/NewsCardOne/NewsCardOne";



const DetailsNews = () => {
    const {id} = useParams();

    const {DetailsNewsRequest, DetailsNews, RecentNews} = NewsStore();
    

    useEffect( ()=>{
        ( async()=>{
            await DetailsNewsRequest(id);
        })()
    } ,[id])


    if(DetailsNews === null) {
        return <h1>Loading...</h1>
    }


    // English date
    const englishDate = new Date();
    // Options for formatting in Bengali (Bn is the ISO 639-1 language code for Bengali)
        const options = { year: "numeric", month: "long", day: "numeric" };
        const bengaliDate = new Intl.DateTimeFormat("bn-IN", options).format( englishDate);


    



    return (
        <section className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="news-details">
                        <h2>{DetailsNews["title"]}</h2>
                        <div className='single-date'>
                            <small><CiUser /> স্টাফ রিপোর্টার </small>
                            <small className='ps-3'><CiCalendar  /> {bengaliDate}</small>
                            <small className='ps-3'><CiRead   /> 16</small>
                        </div>
                        <img className="img-fluid my-3" src={DetailsNews["image"]} alt="Image" />
                        <p>
                        নিজস্ব প্রতিবেদক:
আওয়ামী লীগের সাংগঠনিক সম্পাদক মির্জা আজম এমপি বলেছেন, দুর্নীতিবাজ, আগুন সন্ত্রাসী বিএনপি-জামায়াত নির্বাচন বয়কটের ডাক দিয়ে নির্বাচনী ট্রেন মিস করেছে, এখন তারা ভোট বর্জনের ডাক দিয়েছে, আগামী ৭ জানুয়ারী ভোটের ট্রেনও মিস করবে। আর যারা ট্রেন মিস করে তারা নিজেদের গন্তব্যে পৌছাতে পারেনা, বিএনপি-জামায়াত নির্বাচনের সব ট্রেন মিস করে আন্দোলনের সকল গন্তব্যও হারিয়ে ফেলেছে, এখন তারা দিক ভ্রষ্ট রাজনৈতিক দল।

তিনি বলেন, নীতি ভ্রষ্ট, দিক ভ্রষ্ট বিএনপি-জামায়াতকে দেশের মানুষও প্রত্যাখান করেছে। প্রধামন্ত্রী শেখ হাসিনা দেশের মানুষকে শুধু উন্নয়নের স্বপ্নই দেখাননি, সেই স্বপ্ন বাস্তবে রূপ দিয়েছেন, দেশের মানুষ এখন উন্নয়নে বিশ্বাসী, দুর্নীতিবাজ, আগুন সন্ত্রাসী কোন দলের মিথ্যাচার এখন তারা কর্ণপাত করেনা।

সোমবার জামালপুর সদরের তুলসীরচর ইউনিয়ন আওয়ামী লীগ আয়োজিত নির্বাচনী জনসভায় প্রধান অতিথির বক্তব্যকালে মির্জা আজম এসব কথা বলেন।
তুলসীরচর টিকারাকান্দী সরকারি প্রাথমিক বিদ্যালয় মাঠে আয়োজিত জনসভায় তুলসীরচর ইউনিয়ন আওয়ামী লীগের সভাপতি সাইফুল ইসলামের সভাপতিত্বে আরো বক্তব্য রাখেন সাবেক ভূমিমন্ত্রী রেজাউল করিম হীরা, জেলা আওয়ামী লীগের সভাপতি অ্যাডভোকেট মুহাম্মদ বাকী বিল্লাহ, সহ-সভাপতি ফারুক আহমেদ চৌধুরী, কেন্দ্রীয় ছাত্রলীগের সাবেক সাধারণ সম্পাদক সিদ্দিকী নাজমুল আলম, তুলসীরচর ইউনিয়ন আওয়ামী লীগের সাধারণ সম্পাদক শামীম ইয়াজদানী প্রমুখ।
                        </p>
                    </div>
                    

                </div>
                <div className="col-md-4">
                    <div>
                        <div className='section-title-1'>
                        <h5>সর্বশেষ খবর</h5>
                        </div>
                        <div >  
                        {
                            RecentNews === null ? <RecentNewsSkeleton />  : (
                                RecentNews.map( (news, index) => <NewsCardOne key={index} news={news} /> )
                            )
                        } 
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default DetailsNews;