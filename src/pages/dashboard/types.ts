export type StageObject = {
  id: string;
  name: string;
}

export type InboundObject = {
  id: string;
  trip_id: string;
  load_id: string;
  source: string;
  destination: string;
  planned_start: Date;
  is_subscribed: boolean;
}

export type StageValue = 0 | 1 | 2 | 3;

export type TripStagesObject = {
  id: string;
  status: string;
  stage_values: Array<StageValue>;
}

export type TripStagesDataObject = {
  [key: string]: TripStagesObject;
}

export type IndividualTripStagesObject = {
  stage: string;
  date: Date;
  red_flag: boolean;
  yellow_flag: boolean;
}

export type IndividualTripObject = {
  id: string;
  trip_id: string;
  load_id: string;
  source: string;
  destination: string;
  planned_start: Date;
  is_subscribed: boolean;
  stages: IndividualTripStagesObject[];
}
