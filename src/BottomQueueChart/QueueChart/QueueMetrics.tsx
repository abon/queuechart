import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";

import "./QueueMetrics.css";

const QueueMetric = (): JSX.Element => {
  const metricsData = [
    {
      name: "queueSize",
      heading: "Queue Size",
      divider: true,
      last: {
        period: "Last 12 hrs",
        max: 2,
        avg: 1,
        min: 2,
      },
      next: {
        period: "Next 12 hrs",
        max: 2,
        avg: 1,
        min: 2,
      },
    },
    {
      name: "queueTime",
      heading: "Queuing Time",
      divider: false,
      last: {
        period: "Last 12 hrs",
        max: `2m`,
        avg: `3m`,
        min: `3m`,
      },
      next: {
        period: "Next 12 hrs",
        max: `3m`,
        avg: `3m`,
        min: `3m`,
      },
    },
  ];

  return (
    <>
      <div className="metrics__container">
        {metricsData &&
          metricsData.map((value: any, index: any) => {
            return (
              <React.Fragment key={value.name}>
                <div className="metrics__box">
                  <div className="metrics__header">{value.heading}</div>
                  <table className="metrics__body">
                    <thead>
                      <tr>
                        <th>Period</th>
                        <th>Max</th>
                        <th>Avg</th>
                        <th>Min</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          {value.last.period}
                        </td>
                        <td style={{ marginLeft: "100px" }}>
                          {value.last.max || 0}
                        </td>
                        <td>{value.last.avg || 0}</td>
                        <td>{value.last.min || 0}</td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          {value.next.period}
                        </td>
                        <td>{value.next.max || 0}</td>
                        <td>{value.next.avg || 0}</td>
                        <td>{value.next.min || 0}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {value.divider ? <Divider variant="middle" /> : ""}
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default React.memo(QueueMetric);
