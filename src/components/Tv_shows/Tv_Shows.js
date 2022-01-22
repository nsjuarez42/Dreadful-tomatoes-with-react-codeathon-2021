import Footer from '../Home/Footer'
import Header from '../Home/Header'
import SearchBar from './SearchBar'
import DatePickerSearch from './DatePickerSearch'
import Card from './Card'
import Grid from 'carbon-components-react/lib/components/Grid/Grid'
import Column from 'carbon-components-react/lib/components/Grid/Column'
import Row from 'carbon-components-react/lib/components/Grid/Row'
import { useEffect,useState } from 'react'
import Button from 'carbon-components-react/lib/components/Button'


var JSONdata = require('../../data/data.json')
//slice array in 12 element sets
//one page per set
//buttons according to pages length

function filterSeries(series){

    const filteredSeries = []
    
        for(let i=0;i<series.length;i++){
     
            //console.log(filteredSeries)
            //console.log(i)
        
            if(filteredSeries.length == 0){
                //console.log(i,i+12)
                filteredSeries.push(series.slice(i,i+12))
                i+=12
            }
        
            else if(i + 12 <=series.length){
                //console.log(i,i+12)
                filteredSeries.push(series.slice(i,i+12))
                i+=12
            }
            //push remaining elements
        }
        return filteredSeries
}

function Tv_shows(){
    const filteredSeries = JSONdata.entries.filter(el=>el.programType == "series")

    const [series,setSeries] = useState(filteredSeries)
    const [currentPage,setCurrentPage] = useState(0)
   
    useEffect(()=>{
    console.log(series)

    },[])

   
if(series.length == 0){
   return(<div>
       <Header/>
       <SearchBar/>
       <p>lists is empty</p>
       <Footer/>
   </div>)

}else{

    const onClickSetPage=(e)=>{
      console.log(e)

    }

    /*const Buttons = series.map((el,index)=>{
        return(<Button onClick={onClickSetPage}>{index + 1}</Button>)
    })

    const currentSeries = series[currentPage]

    const columns = []
    var firstcolumn = []
    var secondcolumn = []
    for(let i = 0;i<currentSeries.length;i++){
        
        if(i < currentSeries.length /2){
        firstcolumn.push(currentSeries[i])
        }
        //emptycolumn or use first and 2nd column
       else if(i>currentSeries.length/2){
        secondcolumn.push(currentSeries[i])
        }
    }
    columns.push(firstcolumn)
    columns.push(secondcolumn)
    console.log(columns)

    const firstSeriesColumn = firstcolumn.map((el,index)=>{
    return(<Column><Card serieTitle={el.title} imgSrc={el.images["Poster Art"].url}/></Column>)
    })

    const secondSeriesColumn = secondcolumn.map((el,index)=>{
        return(<Column><Card serieTitle={el.title} imgSrc={el.images["Poster Art"].url}/></Column>)
    })*/

    const onSubmitSearch= (e)=>{
        //how to adjust columns
        //do input with form and regex to find match
        e.preventDefault()
       const {value} = e.target[0]
        console.log(value)
        console.log(filteredSeries.filter(el=>el.title.toUpperCase().includes(value.toUpperCase())))
        if(value == ""){
        setSeries(filteredSeries)
        }else{
            setSeries(filteredSeries.filter(el=>el.title.toUpperCase().includes(value.toUpperCase())))
        }
        
    }

    const onSubmitSearchByDate = (e)=>{
        e.preventDefault()
        console.log(e.target[0].value)
        const {value} = e.target[0]
        if(value == ""){
          setSeries(filteredSeries)
        }else{

            var dateValues = value.split("/")

            const date = new Date(dateValues[2],dateValues[1]-1,dateValues[0])
            const year = date.getFullYear()

          setSeries(filteredSeries.filter(el=>el.releaseYear == year))

        }

    }

    const Cards = series.map((el,index)=>{
       return(<Card serieTitle={el.title} imgSrc={el.images["Poster Art"].url}/>)
    })

    return(<div>
        <Header/>
        <SearchBar  onSubmit={onSubmitSearch}/>
        <DatePickerSearch onSubmit={onSubmitSearchByDate}/>

   <Grid>
  {Cards}
  {/*
    <Row>
    {firstSeriesColumn}
    </Row>

    <Row>
    {secondSeriesColumn}
    </Row> 
  */}

   </Grid>
   {/*Buttons*/}

       <Footer/>
       </div>)
}
   
}

export default Tv_shows