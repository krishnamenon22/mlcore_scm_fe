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

export type NotificationObject = {
    critical: number;
    tripid: number;
    source: string;
    trailerid: number;
    sourceid: number;
}

export type NotificationAPIResponseType = {
    data: NotificationObject[];
}

export type UserProfileAPIResponseType = {
    data: CardProfileObject[];
}

export type CardProfileImageObject = {
    username: string;
}