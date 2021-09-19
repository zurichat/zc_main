import React,{useState,useEffect} from 'react';

const useSemiPersistenHook = (key,initialState) => {
    const [value, setValue] = useState(localStorage.getItem(key) || initialState)
    useEffect(() => {
        localStorage.setItem("search",value)
        
    }, [value])
    return [value,setValue];
}

export default useSemiPersistenHook;