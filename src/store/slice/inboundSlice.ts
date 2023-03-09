import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { StageObject, InboundObject, TripStagesDataObject } from "pages/dashboard/types";

type InitialState = {
  stages: StageObject[];
  trips: InboundObject[];
  tripStages: TripStagesDataObject;
};

const initialState: InitialState = {
  stages: [],
  trips: [],
  tripStages: {},
};

export const inboundSlice = createSlice({
  name: "inbound",
  initialState,
  reducers: {
    setStagesInbound(state, action: PayloadAction<StageObject[]>) {
      state.stages = action.payload;
    },
    setTripsInbound(state, action: PayloadAction<InboundObject[]>) {
      state.trips = action.payload;
    },
    setTripStagesInbound(state, action: PayloadAction<TripStagesDataObject>) {
      state.tripStages = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStagesInbound, setTripsInbound, setTripStagesInbound } = inboundSlice.actions;

export default inboundSlice.reducer;
