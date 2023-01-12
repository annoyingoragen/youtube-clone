import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50',
      // order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '40a70749c9msh1aac24c336b7143p16a6b6jsnaf0de330846b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
export const fetchFromAPI= async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}