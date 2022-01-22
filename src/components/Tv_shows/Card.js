

function Card(props){
    return(<div className="card">
        <figure>
        <img title={props.serieTitle} src={props.imgSrc} alt="serie poster art" height={300} width={260}/>
        <figcaption>{props.serieTitle}</figcaption>
        </figure>       
    </div>)
}

export default Card