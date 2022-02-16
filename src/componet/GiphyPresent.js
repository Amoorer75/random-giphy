import {useState,useEffect} from 'react'
//import {CLIENT_URL} from "../services/constants"
import axios from "axios"


export default function GiphyPresent(props) {
  
    const [giphy, setGiphy] = useState([])
    
    useEffect(() => {

        fetchData();
    }, [])
    
      const fetchData = async () => {
        try {
          const response = await axios.get(props.url);
          const  results  = response.data.data.images.downsized_medium.url;
          setGiphy(results);
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      }
    
  

    return(
        <div className="showAll">
            <img src={giphy}/>
            <button onClick={fetchData}>Random</button>
        </div>
    )
}