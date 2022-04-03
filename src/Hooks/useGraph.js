import { useEffect, useState } from "react"

const useGraph=()=>{
    const [values,setValues]=useState([]);
    useEffect(()=>{
        fetch('chart.json')
        .then(res => res.json())
        .then(data => setValues(data))
    },[])

    return [values,setValues];
}

export default useGraph;