export interface CountryAPIType {
    name: string;
    alpha2Code: string;
    callingCodes: string[];
    flags: Flag;
    flag: string;
}

interface Flag {
    svg: string;
    png: string;
}

export interface Country {
    code: string,
    name: string,
    callingCode: string,
    flag:string
}

