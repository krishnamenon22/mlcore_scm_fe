/* eslint-disable import/prefer-default-export */

/* 
------------------------------------------------------------------------------------------------------------------------------------
Below DS is for inbound trips / outbound trips which will be fetched once
------------------------------------------------------------------------------------------------------------------------------------
*/
export type InboundObject = {
  id: string;
  trip_id: string;
  load_id: string;
  source: string;
  destination: string;
  planned_start: Date;
  is_subscribed: boolean;
}

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
0 - Not Started, 1 - Completed, 2 - medium risk (yellow flag), 3 - high risk (red flag)
------------------------------------------------------------------------------------------------------------------------------------
*/
export type StageValue = 0 | 1 | 2 | 3;

export type StageObject = {
  id: string;
  name: string;
}

export type TripStagesObject = {
  id: string;
  status: string;
  stage_values: Array<StageValue>;
}

export type StreamingDataObject = {
  stages: StageObject[];
  trips: TripStagesObject[];
}

export const streamingData: StreamingDataObject = {
  stages: [],
  trips: []
};

/* 
------------------------------------------------------------------------------------------------------------------------------------
Below DS is when we try to expand single trip and show all of the information about the trip stages
This information will be fetched on demand and can be shown in slider / popup
Final data structure is `IndividualTripObject`
------------------------------------------------------------------------------------------------------------------------------------
*/

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


