function Frame (props){

    return(
        <div style={{ textAlign:'center'}}>
        <h2>{props.title}</h2>
        <p >{props.text}</p> <br/>
        <button className="btn btn-success">Learn More</button>
        </div>
    )
}

export default Frame;