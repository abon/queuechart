import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import ReactDOMServer, {
  renderToString,
  renderToStaticMarkup,
} from "react-dom/server";
import { QueueTooltip } from "./QueueTooltip";

export const QueueChart = () => {
  const [queueData, setQueueData] = useState();

  const getData = () => {
    fetch("https://demo-live-data.highcharts.com/aapl-c.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setQueueData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const options = {
    chart: {
      backgroundColor: "#ffffff0f",
      height: 300,
    },

    xAxis: {
      type: "datetime",
      labels: {
        rotation: 0,
        style: {
          fontSize: "10px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },

    credits: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      useHTML: true,
      borderColor: "transparent",
      backgroundColor: "white",
      borderRadius: 4,
      borderWidth: 3,
      shadow: true,

      formatter: function () {
        return renderToStaticMarkup(
          <>
            <QueueTooltip />
          </>
        );
      },
    },

    title: {
      text: undefined,
    },

    yAxis: {
      labels: {
        enabled: false,
      },
      title: {
        text: "",
      },

      tickInterval: 1,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },

    series: [
      {
        name: "",
        cursor: "pointer",
        step: true,
        showInLegend: false,
        // @ts-ignore
        data: queueData && queueData.slice(0, 10),
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
