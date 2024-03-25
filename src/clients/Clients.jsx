import ClientsLogo from "./ClientsLogo";
import Clinet1 from "./image1.png";
import Clinet2 from "./image2.png";
import Clinet3 from "./image3.png";
import Clinet4 from "./image4.png";
import Clinet5 from "./image5.png";
import Clinet6 from "./image6.png";
import Clinet7 from "./image7.png";
function Clients() {
  return (
    <div style={{ textAlign: "center" }} className="container">
      <h1>Our Clients</h1>
      <p>We have been working with some Fortune 500+ clients</p>
   <div className="d-flex justify-content-between">
   <ClientsLogo image={Clinet1}></ClientsLogo>
   <ClientsLogo image={Clinet2}></ClientsLogo>
   <ClientsLogo image={Clinet3}></ClientsLogo>
   <ClientsLogo image={Clinet4}></ClientsLogo>
   <ClientsLogo image={Clinet5}></ClientsLogo>
   <ClientsLogo image={Clinet6}></ClientsLogo>
   <ClientsLogo image={Clinet7}></ClientsLogo></div>
    </div>
  );
}

export default Clients;
