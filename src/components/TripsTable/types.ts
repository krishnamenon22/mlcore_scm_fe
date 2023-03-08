import { InboundObject, StageObject, TripStagesDataObject } from "pages/dashboard/types";

export type TripsTableProps = {
  stages: StageObject[];
  trips: InboundObject[];
  tripStages: TripStagesDataObject;
};
