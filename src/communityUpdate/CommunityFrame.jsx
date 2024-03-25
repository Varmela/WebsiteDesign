function CommunityFrame(props){


    return(
        <div style={{ width:'256px', height:'255px'}} >
        <img style={{width:'256px', height:'199px'}} src={props.image} alt="people image" >
        </img>
        <section style = {{ width:'220px',height:'123px',  backgroundColor:'rgba(245, 247, 250, 1)'}}>{props.text}  <br/>
         <button className="btn btn-success">Read More --</button></section>
     

        </div>
    )
}
export default CommunityFrame;