import { useState, useEffect } from 'react';
import CardItem from 'components/Card/CardItem'
import TripsTable from 'components/TripsTable';
import client from 'client';
import { useAppSelector, useAppDispatch } from "hooks/store-hooks";
import { setStagesInbound, setTripsInbound, setTripStagesInbound } from 'store/slice/inboundSlice';
import { ENDPOINTS } from 'constants/constant';
import { AxiosResponse } from 'axios';
// import { cards, StagesData, InboundData, TripStagesData } from './dummyData';
import { StagesAPIResponseType, InboundDataAPIResponseType, TripStagesInboundAPIResponseType, CardsAPIResponseType, CardObject } from './types';


export default function Dashboard() {
  const [cards, setCards] = useState<CardObject[]>([]);
  const dispatch = useAppDispatch();
  const { stages, trips, tripStages, } = useAppSelector((state) => state.inbound);

  const fetchInboundCards = async () => {
    const response: AxiosResponse<CardsAPIResponseType> = await client.get(`${ENDPOINTS.inboundCards}`);
    setCards(response.data.data)
  };

  const fetchStagesData = async () => {
    const response: AxiosResponse<StagesAPIResponseType> = await client.get(`${ENDPOINTS.stages}`);
    dispatch(setStagesInbound(response.data.data));
  };

  const fetchInboundTripsData = async () => {
    const response: AxiosResponse<InboundDataAPIResponseType> = await client.get(`${ENDPOINTS.inboundTrips}`);
    dispatch(setTripsInbound(response.data.data));
  };

  const fetchInboundTripsStages = async () => {
    const response: AxiosResponse<TripStagesInboundAPIResponseType> = await client.get(`${ENDPOINTS.inboundTripStages}`);
    dispatch(setTripStagesInbound(response.data.data));
  };

  const setDummyData = () => {
    fetchInboundCards();
    fetchStagesData();
    fetchInboundTripsData();
    fetchInboundTripsStages();
  }

  useEffect(() => {
    setDummyData();
  }, []);

  return (
    <div className="">
      <div className="min-h-[110vh]">
        <p className='text-xl pb-3'>
          Overview
        </p>
        <div className="flex justify-between">
          {cards.map((card) => <CardItem number={card.number} stage={card.stage} />)}
        </div>
        <div className="pt-5 pb-4">
          <TripsTable stages={stages} trips={trips} tripStages={tripStages} />
        </div>
      </div>
    </div>
  );
}
