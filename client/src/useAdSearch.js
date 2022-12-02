import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function useAdSearch(query) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [ads, setAds] = useState([]);

  useEffect(()=>{
    console.log("I am getting Called");
    setLoading(true);
    setError(false);
    setAds([]);
    let cancel;
    axios({
        method: 'GET',
        url: "http://localhost:8000/ads",
        params: {search: query},
        cancelToken: new axios.CancelToken(c => cancel=c)
    }).then(res => {
        setAds([...res.data])
        setLoading(false);
        console.log(res.data);
    }).catch(e => {
        console.log("I came in catch");
        if(axios.isCancel(e)) return
    })
    return ()=> cancel();
  }, [query])
  return {loading, error, ads};
}
