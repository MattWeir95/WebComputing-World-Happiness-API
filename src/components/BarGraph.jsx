import React from "react";

//Component Import
import { HorizontalBar } from "react-chartjs-2";

//Returns a bar graph that takes data in as a prop
export function BarGraph(props) {
  if (props.data.length >= 5) {
    return (
      <div className="chart">
        <HorizontalBar
          height={500}
          width={1000}
          data={{
            labels: props.countries,
            datasets: [
              {
                label: props.label,
                data: props.data,
                fill: false,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: props.title,
              padding: 50,
            },
            legend: {
              display: true,
              position: "left",
            },

            maintainAspectRation: false,
          }}
        />
      </div>
    );
  } else {
    return null;
  }
}
