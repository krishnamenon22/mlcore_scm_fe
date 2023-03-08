/* eslint-disable import/prefer-default-export */

/* 
------------------------------------------------------------------------------------------------------------------------------------
Below DS is for inbound trips / outbound trips which will be fetched once, also we will fetch all stages
------------------------------------------------------------------------------------------------------------------------------------
*/

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

export const stages: StageObject[] = [];
export const inboundData: InboundObject[] = [];

/* 
------------------------------------------------------------------------------------------------------------------------------------
Below DS is for streaming data about trips which will be fetched through sokets at regular intervals
Based on this data the stages columns will be rendered on the table.
Stages are also not pre defined, So we are eliminating the hard coding of stages here.
Final data structure is `StreamingDataObject`
------------------------------------------------------------------------------------------------------------------------------------
*/

/*
------------------------------------------------------------------------------------------------------------------------------------
0 - Stage Not Started, 1 - Completed, 2 - medium risk (yellow flag), 3 - high risk (red flag)
------------------------------------------------------------------------------------------------------------------------------------
*/
export type StageValue = 0 | 1 | 2 | 3;

export type TripStagesObject = {
  status: string;
  stage_values: Array<StageValue>;
}

export type TripStagesDataObject = {
  [key: number]: TripStagesObject;
}

export const TripStagesData: TripStagesDataObject = {};

/* 
------------------------------------------------------------------------------------------------------------------------------------
Below DS is when we try to expand single trip and show all of the information about the trip stages
This information will be fetched on demand and can be shown in slider / popup
Final data structure is `IndividualTripObject`
------------------------------------------------------------------------------------------------------------------------------------
*/

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


