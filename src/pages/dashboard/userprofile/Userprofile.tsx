import { useState, useEffect } from 'react';
import CardItem from 'components/Card/CardItem'
import CardProfileImage from "components/Card/CardProfileImage";
import TripsTable from 'components/TripsTable'
import CardProfile from "components/Card/CardProfile";
import { AxiosResponse } from 'axios';
import { useAppSelector, useAppDispatch } from 'hooks/store-hooks'
import client from 'client';
import { ENDPOINTS } from 'constants/constant';
import { CardsAPIResponseType, CardObject, CardProfileObject, UserProfileAPIResponseType } from './types';


export default function Userprofile() {
    const [cards, setCards] = useState<CardObject[]>([]);
    const [cardProfile, setCardProfile] = useState<CardProfileObject[]>([]);
    const { stages, trips, tripStages } = useAppSelector((state) => state.inbound)
    const fetchInboundCards = async () => {
        const response: AxiosResponse<CardsAPIResponseType> = await client.get(`${ENDPOINTS.inboundCards}`);
        setCards(response.data.data)
    };

    const userProfileData = async () => {
        const response: AxiosResponse<UserProfileAPIResponseType> = await client.get(`${ENDPOINTS.userProfile}`);
        setCardProfile(response.data.data)
    };

    useEffect(() => {
        fetchInboundCards();
        userProfileData();
    }, []);

    return (
        <div className="">
            <div className="min-h-[88vh]">
                <p className='text-xl pb-3'>
                    Overview
                </p>
                <div className="min-h-[20vh] flex ">
                    <div className="min-w-[12vw] "> <CardProfileImage username={cardProfile[0]?.username} />  </div>
                    <div className="mx-4 "> <CardProfile key={cardProfile[0]?.userid} username={cardProfile[0]?.username} userid={cardProfile[0]?.userid} gender={cardProfile[0]?.gender} dob={cardProfile[0]?.dob} location={cardProfile[0]?.location} language={cardProfile[0]?.language} phone={cardProfile[0]?.phone} email={cardProfile[0]?.email} />  </div>
                </div>
                <p className='mx-1 my-4 text-lg pb-3 font-bold'>
                    Mail
                </p>
                <div className="flex justify-between">
                    {cards.map((card) => <CardItem key={card.stage} number={card.number} stage={card.stage} />)}
                </div>
                <div className='pt-5 pb-4'>
                    <TripsTable stages={stages} trips={trips.filter(item => item.is_subscribed)} tripStages={tripStages} />
                </div>
            </div>
        </div>
    );
}