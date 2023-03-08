/* eslint-disable camelcase */
import { StageObject, InboundObject, TripStagesDataObject } from "pages/dashboard/types";

export const StagesData: StageObject[] = [
  { id: 1, name: "Not Started" }, { id: 2, name: "Loading" }, { id: 3, name: "In Yard" }, { id: 4, name: "On Road" }, { id: 5, name: "Arrived" }, { id: 6, name: "Unloaded" }
];

export const InboundData: InboundObject[] = [
  { id: 1, trip_id: 41960515, load_id: 63792991, source: "PL FRITO LAY PL ABERDEEN NMC", destination: "DC FRITO LAY DC VALLEY FORGE", planned_start: "2023-01-18 12:23:00", is_subscribed: false },
];

export const TripStagesData: TripStagesDataObject = {
  1: { id: 1, status: "On Time", stage_values: [1, 1, 2, 0, 0, 0] }
};
