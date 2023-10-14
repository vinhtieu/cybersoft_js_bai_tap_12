import React from "react";
import { useSelector } from "react-redux";
import SeatRow from "./seatRow";

const MovieTheater = () => {
  const seatList = useSelector((state) => state.seat.list);
  const renderSeats = seatList.map((item, index) => {
    return <SeatRow key={index} data={item}></SeatRow>;
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "flex-end",
          marginBottom: "16px",
        }}>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            marginRight: "16px",
          }}>
          <div className="seat" style={{ display: "inline-block" }}></div>
          Available
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            marginRight: "16px",
          }}>
          <div className="seat sold"></div>
          Sold
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
          }}>
          <div className="seat selected"></div>Selected
        </div>
      </div>
      <div className="screen">SCREEN</div>
      <div>{renderSeats}</div>
    </div>
  );
};

export default MovieTheater;
