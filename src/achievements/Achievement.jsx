import { CompassOutlined, ShoppingOutlined, SkinOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import Counts  from './Counts';
function Achievement() {
  return (
    <section style={{ display: "flex" }}>
      <div style={{ flex: 0.5 }}>
        <h1>
          Helping a local<br/> <span style={{ color: "green" }}>business reinvent itself</span>
        </h1>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div style={{ flex: 0.5, display: "flex", flexWrap: "wrap" }}>
        <Counts
          number={2323423}
          label={"Member"}
          icon={<UsergroupAddOutlined style={{ fontSize: 40 }} />}
        ></Counts>
        <Counts number={3223} label={"Clubs"} icon={<CompassOutlined />}></Counts>
        <Counts number={344343} label={"Event Bookings"} icon={<SkinOutlined />}></Counts>
        <Counts number={232232} label={"Payments"} icon={<ShoppingOutlined />}></Counts>
      </div>
    </section>
  );
}

export default Achievement;