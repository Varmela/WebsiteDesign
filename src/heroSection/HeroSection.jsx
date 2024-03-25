import Photo1 from './photo1.png';
function HeroSection(){


    return (
        <>
        <div className="container">
        <div style={{padding:'40px'}} className="row">
        <div className="col-md">
        <h1>Lessons and insights <br/> <span style={{color:'rgba(76, 175, 79, 1)'}}>form 8 years</span></h1>
        <p> Where to grow your business as a photographer: site or social media? </p>
        <button className="btn btn-success">Register</button>
        </div>
        <div className="col-sm">
        <img src={Photo1} style = {{width:"372px", height:"383px"}}></img>
        </div>
        </div>
        

        </div>

        
        </>
    )
}

export default HeroSection;