import {useState,useEffect} from 'react';
import axios from "axios"

export default function SearchGiphy (props){
    

const [giph,setGiphy] = useState('')

const [showGiph,setShowGiph] = useState([])

//console.log(giph)

useEffect(() => {

    fetchData();
}, [])

const fetchData = async () => {
    try {
      const response = await axios.get(`${props.url}&q=${giph}&limit=25&offset=0&rating=g&lang=en`);
      const  results  = response.data.data.map((data) => data.images.downsized_medium.url);

      setShowGiph(results);
      console.log(showGiph)
    } catch (error) {
      console.log(error);
    }
  }

  const images = showGiph.map((data) => {
      return <img src={data}/>
  })
// function add(e){
//     e.preventDefault();
       
//     }
return (
    <div>
  <div>
    <input className="value1" type="text" name="value1" onChange={text => setGiphy(text.target.value) }/>
    <button onClick={fetchData}>Random</button>
    
</div>
<div>

        {images}
   
</div>
   

</div>
)
}