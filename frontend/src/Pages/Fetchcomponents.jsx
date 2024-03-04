import React from 'react'
import CategoryList from '../components/CategoryList';
import { useEffect,useState } from 'react'

export default function Fetchcomponents() {
    const [data, setData] = useState([]);
    // https://outland-server.onrender.com/crude-api
    // http://localhost:3000/crude-api
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://outland-server.onrender.com/crude-api")
                const json = await response.json();
                console.log(json)
                setData(json);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData(); 
    }, []); 
  return(
    <CategoryList data={data}/>
  );
}
