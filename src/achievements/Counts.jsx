import { UsergroupAddOutlined } from "@ant-design/icons";
import React from "react";

function Counts(props) {
  return (
    <article style={{ display: "flex", justifyContent: "space-between", width: 150, padding: 20, flex: 0.5 }}>
      <div>{props.icon} </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <p>{props.number}</p>
        <p>{props.label}</p>
      </div>
    </article>
  );
}

export default Counts;