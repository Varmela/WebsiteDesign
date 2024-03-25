import Frame from "./Farme";
function Unlock(props){


    return(
        <div className="container d-flex justify-content-between">
        <img src={props.image}></img>
        <Frame title={"The unseen of spending three  years at Pixelgrade"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio. "
        }></Frame>
        </div>
    )
}

export default Unlock;