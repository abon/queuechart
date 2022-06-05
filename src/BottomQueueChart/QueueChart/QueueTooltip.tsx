import { Grid } from "@mui/material";
import React from "react";
import "./QueueTooltip.css";
// @ts-ignore
import blueIcon from "../../assets/Ellipse.svg";
// @ts-ignore
import grayIcon from "../../assets/Ellipsegray.svg";

export const QueueTooltip = () => {
  const data = [
    {
      label: "Time",
      value: "12:08:58",
    },
    {
      label: "Total trucks",
      value: 7,
    },
    {
      label: "Capacity",
      value: 2,
    },
    {
      label: "Queue Size",
      value: 5,
    },
  ];
  return (
    <div className="tooltip" style={{ height: "240px", width: "211px" }}>
      <Grid container rowSpacing={1}>
        {data &&
          data.map((item) => (
            <>
              <Grid item xs={6}>
                <div className="tooltip__header">
                  <div style={{ marginRight: "4px" }}>
                    {item.label === "Total trucks" ? (
                      <img src={blueIcon} alt="icon" />
                    ) : item.label === "Capacity" ? (
                      <img src={grayIcon} alt="icon" />
                    ) : (
                      ""
                    )}
                  </div>
                  <div style={{ flexDirection: "column" }}>
                    <div className="tooltip__label">{item.label}</div>
                    <span style={{ textAlign: "left", marginLeft: "-2px" }}>
                      {item.value}
                    </span>
                  </div>
                </div>
              </Grid>
            </>
          ))}
      </Grid>
      <div style={{ marginTop: "12px" }}>
        <div className="tooltip__label">Trucks being loaded</div>
        <span>TR001, TR002</span>
      </div>
      <div style={{ marginTop: "12px" }}>
        <div className="tooltip__label">Trucks in the queue</div>
        <div>TR003, TR004, TR005, TR006</div>
      </div>
    </div>
  );
};
