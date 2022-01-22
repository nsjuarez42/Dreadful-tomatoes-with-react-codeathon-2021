import Header from '../Home/Header'
import Footer from '../Home/Footer'
import SearchBar from '../Tv_shows/SearchBar'
import { useState } from 'react'
import Card from '../Tv_shows/Card'
import '../../stylesheets/Movies/Movies.scss'
import Grid from 'carbon-components-react/lib/components/Grid/Grid'
import { Row,Column } from 'carbon-components-react/lib/components/Grid'
import Button from 'carbon-components-react/lib/components/Button'

var JSONData = require('../../data/data.json')

//filters by 12 elements 
function filterMovies(movies){

    const filteredMovies = []
    
        for(let i=0;i<movies.length;i++){
     
        
            if(filteredMovies.length == 0){
                filteredMovies.push(movies.slice(i,i+12))
                i+=11
            }
        
            else if(i + 12 <=movies.length){
                filteredMovies.push(movies.slice(i,i+12))
                i+=11
            }
            else{
                filteredMovies.push(movies.slice(i,movies.length))
                i=movies.length-1;
            }
        }
        console.log(filteredMovies)
        return filteredMovies
}

function Movies(){
  const filteredMovies = filterMovies(JSONData.entries.filter(el=>el.programType == "movie"))

  const [movies,setMovies] = useState(filteredMovies)
  const [currentPage,setCurrentPage] = useState(0)


  if(movies.length == 0){
    return(<div>
        <Header/>
        <p>movies is empty</p>
       <Footer/>
       </div>)
  }else{

    const onClickSetPage=(e)=>{
        setCurrentPage(e.target.value)
      }

      const Buttons = movies.map((el,index)=>{
        return(<button onClick={onClickSetPage} value={index}>{index + 1}</button>)
    })

    const currentMovies = movies[currentPage]

    
     const columns = []
    var firstcolumn = []
    var secondcolumn = []
    for(let i = 0;i<currentMovies.length;i++){
        
        if(i < currentMovies.length /2){
        firstcolumn.push(currentMovies[i])
        }
        //emptycolumn or use first and 2nd column
       else if(i>=currentMovies.length/2){
        secondcolumn.push(currentMovies[i])
        }
    }

    const firstSeriesColumn = firstcolumn.map((el,index)=>{
        return(<div><Card serieTitle={el.title} imgSrc={el.images["Poster Art"].url}/></div>)
        })
    
        const secondSeriesColumn = secondcolumn.map((el,index)=>{
            return(<div><Card serieTitle={el.title} imgSrc={el.images["Poster Art"].url}/></div>)
        })

    return(<div>
        <Header/>
        <SearchBar/>
      <div className="movies">
         <div className="first-column">
          {firstSeriesColumn}
         </div>

         <div className="second-column">
         {secondSeriesColumn}
         </div>

        </div> 
        <div>
        {Buttons}
        </div>
        <Footer/>
    </div>)
  }

}
export default Movies