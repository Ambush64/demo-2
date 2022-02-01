import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function Mini({ dataVal, chartData, chartDataset, chartLabel }) {
  return (
    <>
      {dataVal ? (
        <div className="col-6">
          <div className="main-div w-100 p-5 h-100">
            {dataVal.map((val, ind) => {
              return (
                <>
                  <h1></h1>
                  <div className="cards p-1 d-flex w-100">
                    <div className="hero w-100">
                      <h2>{val.title}</h2>
                      <p>vs {val.month}</p>
                    </div>
                    {val.no && val.sub ? (
                      <div className="content d-flex flex-row justify-content-end align-items-center w-25 ">
                        <p>
                          {val.no} <span>({val.sub})</span>
                        </p>
                      </div>
                    ) : null}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="col-12  p-3">
          {chartData && (
            <div className="chart">
              <Line
                data={{
                  labels: chartData,
                  datasets: [
                    {
                      backgroundColor: "rgba(145, 136, 160, 0.664)",
                      fill: true,
                      data: chartDataset,
                      label: chartLabel,
                    },
                  ],
                }}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Mini;
