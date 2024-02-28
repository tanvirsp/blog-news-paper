import { create } from 'zustand'
import axios from 'axios';

const NewsStore = create( (set)=>({
    TopNews: null,
    TopNewsRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/top-news`);
        if(res.data["status"] ==="success"){
            set({TopNews: res.data['data']})
        }
    },


    RecentNews: null,
    RecentNewsRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/news`);
        if(res.data["status"] ==="success"){
            set({RecentNews: res.data['data']})
        }

    },

    
    SaradeshNews: null,
    SaradeshNewsRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/news/top/সারাদেশ`);
        if(res.data["status"] ==="success"){
            set({SaradeshNews:res.data["data"] })
        }
    },

    NationalNews: null,
    NationalNewsRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/news/top/জাতীয়`);
        if(res.data["status"] ==="success"){
            set({NationalNews:res.data["data"] })
        }
    },




    ProblemAndProspectsNews: null,
    ProblemAndProspectsNewsRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/news/top/সমস্যা-ও-সম্ভাবনা`);
        if(res.data["status"] ==="success"){
            set({ProblemAndProspectsNews:res.data["data"] })
        }
    },


    InternationalNews: null,
    InternationalNewsRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/news/top/আন্তর্জাতিক`);
        if(res.data["status"] ==="success"){
            set({InternationalNews:res.data["data"] })
        }
    },

    SportsNews: null,
    SportsNewsRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/news/top/খেলাধুলা`);
        if(res.data["status"] ==="success"){
            set({SportsNews:res.data["data"] })
        }
    },

    DetailsNews: null,
    DetailsNewsRequest: async(id) =>{
        const res = await axios.get(`http://localhost:5000/api/v1/details/${id}`);
        if(res.data["status"] ==="success"){
            set({DetailsNews:res.data["data"][0] })
        }
    }





} ))


export default NewsStore;