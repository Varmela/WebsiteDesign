function Link() {
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'15px',textAlign:'right'}} className="row">
      <div className="col">
        <h3>Company</h3>
        <h5>About us</h5>
        <h5>Blog</h5>
        <h5>Contact us</h5>
      </div>
      <div className="col">
      <h3>Support</h3>
      <h5>Help center</h5>
      <h5>Terms of Service</h5>
      <h5>Legal</h5>
      </div>
      <div className="col">
      <h3>Stay up to date</h3>
      </div>
    </div>
  );
}

export default Link;
