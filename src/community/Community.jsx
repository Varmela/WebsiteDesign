
import "./community.css";
import Member from "./Member";
import peopleImage from "./people.png";
import handsImage from "./hands.png";
import buildingImage from "./building.png";

function Community() {
  return (
    <div className="community">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Manage your entire community <br/> in a single system
      </h1>
      <p
        style={{
          textAlign: "center",
        }}
      >
        Who is Nextcent suitable for?
      </p>
      <section  style={{
        textAlign: "center",
      }} className="card-container">
        <Member title={"Membership Organisations"} image={peopleImage} ></Member>
        <Member title={"National Associations"} image={handsImage}></Member>
        <Member title={"Clubs And Groups"} image={buildingImage}></Member>
      </section>
    </div>
  );
}

export default Community;
