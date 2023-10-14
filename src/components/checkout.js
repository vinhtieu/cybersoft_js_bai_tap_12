import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toCurrency } from "../utils/helper";
import { buySeat } from "../redux";
import { message } from "antd";

const Checkout = () => {
  const list = useSelector((state) => state.seat.list);
  const selectedSeats = list.reduce((acc, item) => {
    return acc.concat(
      item.seats.filter((element) => element.status === "selected")
    );
  }, []);
  const count = selectedSeats.length || 0;
  const subTotal = useSelector((state) => toCurrency(state.seat.subTotal));
  const tax = useSelector((state) => toCurrency(state.seat.tax));
  const total = useSelector((state) => toCurrency(state.seat.total));
  const dispatch = useDispatch();

  const renderSelectedSeats = (array) => {
    return array.map((item, index) => {
      return (
        <div
          key={index}
          style={{
            width: "25px",
            height: "25px",
            display: "grid",
            placeItems: "center",
            background: "#082e52",
            color: "#ffca37",
            fontWeight: "600",
            borderRadius: "3px",
          }}>
          {item.seat}
        </div>
      );
    });
  };

  const handleBuyTickets = (seat) => {
    dispatch(buySeat(seat));
  };

  return (
    <div
      style={{
        textAlign: "left",
        paddingInline: "16px",
      }}>
      <p
        style={{
          margin: "0 0 12px 0",
          fontSize: "18px",
        }}>
        <strong>Your Selected Seats</strong>
      </p>
      <span>{`${count} Seats`}</span>
      <div
        style={{
          height: "50px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          padding: "8px 0",
        }}>
        {renderSelectedSeats(selectedSeats)}
      </div>
      <div>
        <div
          style={{
            marginBottom: "8px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <span>Subtotal</span>
          <span>{subTotal} VND</span>
        </div>
        <div
          style={{
            marginBottom: "8px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <span>Tax</span>
          <span>{tax} VND</span>
        </div>
        <div
          style={{
            height: "50px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #082e52",
          }}>
          <span
            style={{
              fontWeight: "600",
              fontSize: "18px",
            }}>
            Total
          </span>
          <span>{total} VND</span>
        </div>
      </div>
      <button
        style={{
          cursor: "pointer",
          width: "100%",
          height: "35px",
          border: "none",
          borderRadius: "3px",
          background: "#ffca37",
          color: "#082f4f",
          fontWeight: "600",
        }}
        onClick={() => {
          if (count > "0") {
            handleBuyTickets(selectedSeats);
            message.success("Success");
          } else {
            message.error("Please select a seat");
          }
        }}>
        Check Out
      </button>
    </div>
  );
};

// let mapStateToProps = (state) => {
//   return {
//     selectedSeats: flattenArray([
//       state.seatList.reduce((acc, item) => {
//         return acc.concat([
//           ...item.seats.filter((element) => {
//             if (element.status === SELECTED) {
//               return true;
//             }
//           }),
//         ]);
//       }, []),
//     ]),
//   };
// };

// let mapDispatchToProps = (dispatch) => {
//   return {
//     handleCalculateTotalPrice: (payload) => {
//       let action = {
//         type: CALC_TOTAL,
//         payload,
//       };

//       dispatch(action);
//     },
//     handleBuyTickets: (payload) => {
//       let action = {
//         type: BUY_SEAT,
//         payload,
//       };

//       dispatch(action);
//     },
//   };
// };

export default Checkout;
// export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
