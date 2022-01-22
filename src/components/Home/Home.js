import { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Card from './Card'
import {Row,Column,Grid} from "carbon-components-react/lib/components/Grid"
import '../../stylesheets/Home/Home.scss'

var JSONdata = require('../../data/data.json')

async function fetchData(url){
    
}

function getRandomItem(arr){
 return arr[Math.floor(Math.random() * arr.length)]
}

function Home(){

    const [dataSeries,setDataSeries] = useState(JSONdata.entries.filter(el =>el.programType == "series"))
    const [dataMovies,setDataMovies] = useState(JSONdata.entries.filter(el=>el.programType == "movie"))
    const [movie,setMovie] = useState(getRandomItem(dataMovies))
    const [serie,setSerie] = useState(getRandomItem(dataSeries))

//request the file with axios or fetch
    useEffect(()=>{
      try {
          
   // setDataSeries(JSONdata.entries.filter(el =>el.programType == "series"))
    //setDataMovies(JSONdata.entries.filter(el=>el.programType == "movie"))
   // setMovie(getRandomItem(dataMovies))
    //setSerie(getRandomItem(dataSeries))

      } catch (error) {
          console.log(error)
      }
    },[])
    console.log(movie,serie)
    const {url:movie_url} = movie.images["Poster Art"]
    const {url:serie_url} = serie.images["Poster Art"]

    return(<div>
        <Header/>
        <div className="home-grid">
          <div>
          <Card url={movie_url} title="Movies" alt="Movie poster" redirect_url="/movies"/>
          </div>
          <div>
           <Card url={serie_url} title="Series" alt="Image poster" redirect_url="/series"/> 
          </div>
        </div>
     <Footer/>
    </div>)
}

export default Home