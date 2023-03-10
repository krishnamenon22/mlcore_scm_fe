export type CardObject = {
    number: number;
    stage: string;
}

export type CardsAPIResponseType = {
    data: CardObject[];
}

export type CardProfileObject = {
    username: string;
    userid: number;
    gender: string;
    dob: string;
    location: string;
    language: string;
    phone: string;
    email: string;
}

export type CardProfileImageObject = {
    username: string;
}