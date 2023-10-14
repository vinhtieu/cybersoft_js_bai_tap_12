import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSeat, calcTotal, removeSeat } from "../redux";

const Seat = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  let isDisabled = props.data.status === "sold" ? true : false;

  const handleSelectSeats = (seats) => {
    dispatch(addSeat(seats));
  };

  const handleRemoveSeats = (seats) => {
    dispatch(removeSeat(seats));
  };

  const handleCalcTotal = (price) => {
    dispatch(calcTotal(price));
  };

  return (
    <div
      className={
        props.data.status === "selected"
          ? "seat selected"
          : props.data.status === "sold"
          ? "seat sold"
          : "seat"
      }
      style={{
        width: "35px",
        height: "35px",
        display: "grid",
        placeItems: "center",
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
      }}
      onClick={() => {
        if (isDisabled) return;
        if (!isSelected) {
          handleSelectSeats(props.data);
          handleCalcTotal(props.data.price);
        } else {
          handleRemoveSeats(props.data);
          // subtract the seat's price from total price
          handleCalcTotal(props.data.price * -1);
        }

        setIsSelected((prevValue) => !prevValue);
      }}>
      {props.data.seat}
    </div>
  );
};

export default Seat;
