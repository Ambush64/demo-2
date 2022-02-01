import React from "react";
import Mini from "./Mini";

function Cards({ data }) {
  return (
    <>
      <Mini dataVal={data.Numbers} />
      <Mini dataVal={data.CycleTime} />
      <Mini
        chartData={data.Chart[0].labels}
        chartDataset={data.Chart[0].datasets[0].data}
        chartLabel={data.Chart[0].datasets[0].label}
      />
      <Mini dataVal={data.Milestone} />
      <Mini dataVal={data.AreasOfConcern} />
    </>
  );
}

export default Cards;
