import {useState,useEffect} from 'react';
import axios from "axios"

export default function TrendingGiphy(props){

    const [trendGiphy, setTrendGiphy] = useState([])
    
    useEffect(() => {

        fetchData();
    }, [])
    
      const fetchData = async () => {
        try {
          const response = await axios.get(props.url);
          const  results  = response.data.data.map((data) => data.images.downsized_medium.url);
          setTrendGiphy(results);
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      }
     
      const images = trendGiphy.map((data) => {
        return <img src={data}/>
    })

return (
<div>

    {images}

</div>

)

}
