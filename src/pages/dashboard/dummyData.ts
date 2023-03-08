/* eslint-disable camelcase */
import { StageObject, InboundObject, TripStagesDataObject } from "pages/dashboard/types";

export const cards =
  [
    { number: 23, stage: "Pick Start" },
    { number: 33, stage: "Pick End" },
    { number: 18, stage: "Load Completed" },
    { number: 3, stage: "Pick Tracking Depart" },
    { number: 9, stage: "Drop Tracking Arrival" },
    { number: 10, stage: "Unload" }
  ];

export const StagesData: StageObject[] = [
  { id: 1, name: "Not Started" }, { id: 2, name: "Loading" }, { id: 3, name: "In Yard" }, { id: 4, name: "On Road" }, { id: 5, name: "Arrived" }, { id: 6, name: "Unloaded" }
];

export const InboundData: InboundObject[] = [
  { id: 1, trip_id: 41960515, load_id: 63792991, source: "PL FRITO LAY PL ABERDEEN NMC", destination: "DC FRITO LAY DC VALLEY FORGE", planned_start: "2023-01-18 12:23:00", is_subscribed: false },
  { id: 2, trip_id: 41941116, load_id: 63746108, source: "RP FRITO LAY RP TECH PKG NORTH PA", destination: "DC FRITO LAY DC CRANBERRY PA", planned_start: "2023-01-13 07:38:00", is_subscribed: true },
  { id: 3, trip_id: 41971899, load_id: 63795737, source: "RP FRITO LAY RP QUAL PAK HOUSTON", destination: "DC FRITO LAY DC HOUSTON WILLOWBRK", planned_start: "2023-01-17 06:57:36", is_subscribed: false },
  { id: 4, trip_id: 41911487, load_id: 63654363, source: "RP FL RP QUAL PAC KANSAS CITY", destination: "DC FRITO LAY DC KANSAS CITY", planned_start: "2023-01-12 06:16:00", is_subscribed: true },
  { id: 5, trip_id: 41969087, load_id: 63796534, source: "PL FRITO LAY PL CAMBRIDGE ON", destination: "RP FLC RP ALLIANCE BRAMPTON", planned_start: "2023-01-17 11:05:00", is_subscribed: false },
  { id: 6, trip_id: 41969868, load_id: 63795876, source: "PL FRITO LAY PL ORLANDO FL", destination: "PL FRITO LAY PL ORLANDO REG WHSE", planned_start: "2023-01-18 07:41:00", is_subscribed: false },
  { id: 7, trip_id: 41949996, load_id: 63780261, source: "PL FRITO LAY PL INDY NMC", destination: "DC FRITO LAY DC KANSAS CITY", planned_start: "2023-01-17 10:17:00", is_subscribed: false },
  { id: 8, trip_id: 41977067, load_id: 63794579, source: "PL FRITO LAY PL ORLANDO REG WHSE", destination: "DC FRITO LAY DC JACKSONVILLE FL", planned_start: "2023-01-18 05:01:00", is_subscribed: true },
  { id: 9, trip_id: 41950098, load_id: 63763812, source: "PL FRITO LAY PL SAN ANTONIO TX", destination: "DC FRITO LAY DC MCALLEN TX", planned_start: "2023-01-13 20:30:00", is_subscribed: false },
  { id: 10, trip_id: 42027647, load_id: 63870320, source: "PL FRITO LAY PL KILLINGLY CT", destination: "DC FRITO LAY DC N NEW JERSEY MEGA", planned_start: "2023-01-23 17:12:00", is_subscribed: false },
  { id: 11, trip_id: 41926816, load_id: 63746552, source: "RP FRITO LAY RP TECH PKG SOUTH FL", destination: "DC FRITO LAY DC JACKSONVILLE FL", planned_start: "2023-01-12 10:25:00", is_subscribed: false },
  { id: 12, trip_id: 42009111, load_id: 63825085, source: "PL FRITO LAY PL DALLAS TX ", destination: "DC FRITO LAY DC CE DOOLIN SVC TX", planned_start: "2023-01-20 11:59:00", is_subscribed: false },
  { id: 13, trip_id: 41972306, load_id: 63790752, source: "PL FRITO LAY PL KERN CA", destination: "PL FRITO LAY PL CUCAMONGA CA", planned_start: "2023-01-18 23:30:00", is_subscribed: false },
];

export const TripStagesData: TripStagesDataObject = {
  1: { status: "On Time", stage_values: [1, 1, 1, 0, 0, 0] },
  2: { status: "On Time", stage_values: [1, 1, 1, 1, 2, 0] },
  3: { status: "On Time", stage_values: [1, 1, 2, 0, 0, 0] },
  4: { status: "Delayed", stage_values: [3, 0, 0, 0, 0, 0] },
  5: { status: "Delayed", stage_values: [1, 3, 0, 0, 0, 0] },
  6: { status: "On Time", stage_values: [1, 1, 1, 1, 1, 1] },
  7: { status: "On Time", stage_values: [1, 1, 1, 2, 0, 0] },
  8: { status: "On Time", stage_values: [1, 1, 1, 1, 1, 0] },
  9: { status: "On Time", stage_values: [1, 0, 0, 0, 0, 0] },
  10: { status: "Delayed", stage_values: [1, 3, 0, 0, 0, 0] },
  11: { status: "On Time", stage_values: [1, 1, 1, 1, 1, 1] },
  12: { status: "On Time", stage_values: [2, 0, 0, 0, 0, 0] },
  13: { status: "Delayed", stage_values: [1, 1, 1, 3, 0, 0] },
};
