/* eslint-disable security/detect-object-injection */
import SlideOver from "components/SlideOver";
import React, { useEffect, useState } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ENDPOINTS } from 'constants/constant';
import client from 'client';
import { AxiosResponse } from 'axios';
import { IndividualTripObjectAPIResponseType, IndividualTripObject, StageObject } from "pages/dashboard/types";
import moment from "moment";
import { Card } from "@mui/material";

function TripTimelineSlider(
  { stages, sliderItemId, setShowSlider, tripStatus }:
    { stages: StageObject[], sliderItemId: number, setShowSlider: (flag: boolean) => void, tripStatus: string }) {
  const [trip, setTrip] = useState<IndividualTripObject | null>(null);
  const fetchTripsStages = async () => {
    const response: AxiosResponse<IndividualTripObjectAPIResponseType> = await client.get(`${ENDPOINTS.individualTrip}/?id=${sliderItemId}`);
    setTrip(response.data.data)
  };

  useEffect(() => {
    fetchTripsStages();
  }, []);

  return (
    <SlideOver closeOnClick={() => setShowSlider(false)}>
      {
        trip !== null && (
          <div className="flex justify-center flex-col">
            <div className={`text-xl text-center p-2 ${tripStatus === "Delayed" ? "bg-red-300" : ""}`}>{tripStatus}</div>
            <Timeline position="alternate">
              {
                trip?.stages.map((stage, index) => (
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{ backgroundColor: stage.date === "" ? "grey" : stage.red_flag ? "#ef4444" : stage.yellow_flag ? "#eab308" : "green" }} />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      {
                        stage.date !== "" ? (
                          <Card className="p-2">
                            <div className="text-sm">
                              <div>
                                {stages[index]?.name}
                              </div>
                              <div>
                                {moment(stage.date).format("MMM DD, YY")}
                              </div>
                            </div>
                          </Card>
                        ) : ""
                      }
                    </TimelineContent>
                  </TimelineItem>
                ))
              }
            </Timeline>
          </div>
        )
      }
    </SlideOver>
  );
}

export default TripTimelineSlider;
