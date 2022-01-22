import Home from "./Home/Home";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Tv_shows from "./Tv_shows/Tv_Shows";
import Movies from "./Movies/Movies";

/*TODO:
search and filter by date 
styling with sass
carbon components
errors
*/
function App(){
  return(
    <BrowserRouter>
      <Routes>
        
    <Route path="/" element={<Home/>}/>
    <Route path="/series" element={<Tv_shows/>}/>
    <Route path="/movies" element={<Movies/>}/>

    </Routes>
  </BrowserRouter>
  )
}

export default  App