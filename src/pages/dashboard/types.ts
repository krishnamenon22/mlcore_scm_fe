export type CardObject = {
  number: number;
  stage: string;
}

export type StageObject = {
  id: number;
  name: string;
}

export type InboundObject = {
  id: number;
  trip_id: number;
  load_id: number;
  source: string;
  destination: string;
  planned_start: string;
  is_subscribed: boolean;
}

export type StageValue = 0 | 1 | 2 | 3;

export type TripStagesObject = {
  status: string;
  stage_values: Array<StageValue>;
}

export type TripStagesDataObject = {
  [key: number]: TripStagesObject;
}

export type IndividualTripStagesObject = {
  stage: string;
  date: string;
  red_flag: boolean;
  yellow_flag: boolean;
}

export type IndividualTripObject = {
  id: number;
  trip_id: number;
  load_id: number;
  source: string;
  destination: string;
  planned_start: string;
  is_subscribed: boolean;
  stages: IndividualTripStagesObject[];
}

export type CardsAPIResponseType = {
  data: CardObject[];
}

export type StagesAPIResponseType = {
  data: StageObject[];
}

export type InboundDataAPIResponseType = {
  data: InboundObject[];
}

export type TripStagesInboundAPIResponseType = {
  data: TripStagesDataObject;
}
