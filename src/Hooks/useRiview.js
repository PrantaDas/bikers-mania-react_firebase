import { useEffect, useState } from "react"

const useRiview=()=>{
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('review.json')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        setReviews(data)
    })
    },[]);

    return [reviews,setReviews];

}

export default useRiview;