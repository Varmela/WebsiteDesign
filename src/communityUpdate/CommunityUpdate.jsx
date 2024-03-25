import CommunityFrame from "./CommunityFrame";
import Frame1 from "./imageFrame.png";
import Frame2 from "./imageFrame2.png";
import Frame3 from "./imageFrame3.png";
function CommunityUpdate() {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Caring is the new marketing</h3>
      <p>
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's more.
      </p>
      <div className="d-flex justify-content-between">
        <CommunityFrame image={Frame1} text={'Creating Streamlined Safeguarding Processes with OneRen'}></CommunityFrame>
        <CommunityFrame image={Frame2} text={'What are your safeguarding responsibilities and how can you manage them?'}></CommunityFrame>
        <CommunityFrame image={Frame3} text={'Revamping the Membership Model with Triathlon Australia Australia'}></CommunityFrame>
      </div>
    </div>
  );
}

export default CommunityUpdate;
