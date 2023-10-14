import React, { Component } from "react";
import Seat from "./seat";

const SeatRow = (props) => {
  const renderSeats = (array) => {
    return array.map((item, index) => {
      return <Seat key={index} data={item}></Seat>;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "16px",
        paddingInline: "18px",
      }}>
      {renderSeats(props.data.seats)}
    </div>
  );
};

export default SeatRow;
