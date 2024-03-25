function Member(props) {
  return (
    <article style={{ border: "1px solid gray", padding: 20 }}>
      <img src={props.image} alt="people image" />
      <h3>{props.title}</h3>
      <p>Our membership management software provides full automation of membership renewals and payments</p>
    
    </article>
  );
}

export default Member;
