import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import { QueueChart } from "../QueueChart/QueueChart";
import QueueMetrics from "../QueueChart/QueueMetrics";
import "./BottomPanel.css";
// @ts-ignore
import truckIcon from "../../assets/Icon.png";

export const BottomPanel = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleDrawerOpen}>Open</Button>
      <Drawer anchor="bottom" open={open} onClose={handleDrawerClose}>
        <div className="panel__header">
          <div className="header__right">
            <img src={truckIcon} alt="truck icon" />
            <span className="header__truck">S001</span>
            <span className="header__type">MANUFACTURER MODEL</span>
          </div>
          <div
            style={{ float: "right", cursor: "pointer" }}
            onClick={handleDrawerClose}
          >
            <CloseIcon />
          </div>
        </div>
        <Grid container>
          <Grid item xs={6} md={2} style={{ height: "300px" }}>
            <div>
              <QueueMetrics />
            </div>
          </Grid>
          <Grid item xs={6} md={10} style={{ height: "100px" }}>
            <QueueChart />
          </Grid>
        </Grid>
      </Drawer>
    </React.Fragment>
  );
};
