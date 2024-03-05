import React, { useEffect, useState } from 'react';
import CategoryList from '../components/CategoryList';
import Loading from '../components/Loader';

export default function Fetchcomponents() {
    const [data, setData] = useState([]);
    const [loader,setLoader]=useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://hat-bxol.onrender.com/crude-api");
                const json = await response.json();
                console.log(json)
                setData(json);
                setLoader(false);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData(); 
    }, []); 

    return (
        <>
        <p className="heading">Find Your Style: Shop Our Latest Selection</p>
        {loader && <Loading/>}
        <CategoryList hat={data}/>
        </>
        
    );
}
