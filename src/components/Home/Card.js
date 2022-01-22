import { Navigate } from 'react-router-dom'
import {useState} from 'react'

function Card(props){
    
    const [redirect,setRedirect] = useState(false)

    const onClickRedirect = ()=>{
      setRedirect(true)
    }
    if(redirect){
        return(<Navigate to={props.redirect_url}/>)
    }
    else{
        return(<div className="home-card" onClick={onClickRedirect}>
            <figure>
            <img src={props.url} alt={props.imgAlt} height={700} width={400}/>
            <figcaption>{props.title}</figcaption>
            </figure>
        </div>)
    }
    
}

export default Card