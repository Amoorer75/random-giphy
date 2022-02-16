import { NavLink, Route, Routes } from 'react-router-dom';
import GiphyPresent from "./componet/GiphyPresent"
import './App.css';
import SearchInput from "./componet/SearchInput";
import {CLIENT_URL,SearchCLIENT_URL,TrendingCLIENT_URL} from "./services/constants"
import TrendingGiphy from './componet/TrendingGiphy';

function App() {
  return (
    <div className="App">
        <div className="links">
      <nav>
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"/search"}>Search</NavLink>
          <NavLink to={"/trending"}>Trending</NavLink>
      </nav>
      
    </div>
      <Routes>
        <Route path="/" element={<GiphyPresent url={CLIENT_URL}/>} />
        <Route path="/search" element={<SearchInput url={SearchCLIENT_URL} />} />
        <Route path="/trending" element={<TrendingGiphy url={TrendingCLIENT_URL} />} />
        
      </Routes>

    
      
    </div>
  );
}

export default App;

