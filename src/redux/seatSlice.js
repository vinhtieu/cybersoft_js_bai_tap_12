import { seatData } from "../database/seatData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: seatData,
  subTotal: 0,
  tax: 0,
  total: 0,
};

const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    addSeat: (state, { type, payload }) => {
      const list = state.list.map((item) => {
        return {
          ...item,
          seats: item.seats.map((element) => {
            if (element.seat === payload.seat) {
              return {
                ...element,
                status: "selected",
              };
            }

            return element;
          }),
        };
      });

      return { ...state, list: list };
    },

    removeSeat: (state, { type, payload }) => {
      const list = state.list.map((item) => {
        return {
          ...item,
          seats: item.seats.map((element) => {
            if (element.seat === payload.seat) {
              return {
                ...element,
                status: "available",
              };
            }

            return element;
          }),
        };
      });

      return { ...state, list: list };
    },

    calcTotal: (state, { type, payload }) => {
      let amount = state.subTotal + payload;
      let amountTax = amount * 0.1;
      let amountTotal = amount + amountTax;
      return {
        ...state,
        subTotal: amount,
        tax: amountTax,
        total: amountTotal,
      };
    },

    buySeat: (state, { type, payload }) => {
      const list = state.list.map((item) => {
        return {
          ...item,
          seats: item.seats.map((element) => {
            for (const item of payload) {
              if (element.seat === item.seat) {
                return {
                  ...element,
                  status: "sold",
                };
              }
            }

            return element;
          }),
        };
      });

      return {
        ...state,
        list: list,
        subTotal: 0,
        tax: 0,
        total: 0,
      };
    },
  },
});

export const { addSeat, calcTotal, buySeat, removeSeat } = seatSlice.actions;
export default seatSlice.reducer;
