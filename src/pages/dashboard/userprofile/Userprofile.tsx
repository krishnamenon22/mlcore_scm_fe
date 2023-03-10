import { useState, useEffect } from 'react';
import CardItem from 'components/Card/CardItem'
import CardProfileImage from "components/Card/CardProfileImage";
import CardProfile from "components/Card/CardProfile";
import { AxiosResponse } from 'axios';
import client from 'client';
import { ENDPOINTS, USERDETAILS } from 'constants/constant';
import { CardsAPIResponseType, CardObject, CardProfileObject } from './types';


export default function Userprofile() {
    const [cards, setCards] = useState<CardObject[]>([]);
    const [cardProfile, setCardProfile] = useState<CardProfileObject[]>([]);

    const fetchInboundCards = async () => {
        const response: AxiosResponse<CardsAPIResponseType> = await client.get(`${ENDPOINTS.inboundCards}`);
        setCards(response.data.data)
    };

    useEffect(() => {
        console.log("user details", USERDETAILS)
        fetchInboundCards();
        setCardProfile(USERDETAILS)

    }, []);
    console.log("card profile", cardProfile[0])
    return (
        <div className="">
            <div className="min-h-[88vh]">
                <p className='text-xl pb-3'>
                    Overview
                </p>
                <div className="min-h-[20vh] flex justify-between">
                    <div className="min-w-[12vw] "> <CardProfileImage username={cardProfile[0].username} />  </div>
                    <div className="mx-4 "> <CardProfile key={cardProfile[0].userid} username={cardProfile[0].username} userid={cardProfile[0].userid} gender={cardProfile[0].gender} dob={cardProfile[0].dob} location={cardProfile[0].location} language={cardProfile[0].language} phone={cardProfile[0].phone} email={cardProfile[0].email} />  </div>
                </div>
                <p className='mx-1 my-4 text-lg pb-3 font-bold'>
                    Mail
                </p>
                <div className="flex justify-between">
                    {cards.map((card) => <CardItem key={card.stage} number={card.number} stage={card.stage} />)}
                </div>
            </div>
        </div>
    );
}