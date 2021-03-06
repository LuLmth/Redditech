import { Preference as PreferenceType } from "../types/preference";
import { Subscribe as SubscribeType } from "../types/subscribe";

const reditApiUrl = 'https://oauth.reddit.com';

export const ApiGetRequest = async (route: string, accessToken: string) => {
    const request = await fetch(`${reditApiUrl}${route}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${accessToken}`,
            'User-Agent': 'BorisJonhsonApp',
        },
    });
    return request.json();
};

export const ApiPatchRequest = async (route: string, accessToken: string, data: PreferenceType) => {
    const request = await fetch(`${reditApiUrl}${route}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${accessToken}`,
            'User-Agent': 'BorisJonhsonApp',
        },
        body: JSON.stringify(data),
    });
    return request.json();
};

export const ApiPostSubscribeRequest = async (route: string, accessToken: string) => {
    const request = await fetch(`${reditApiUrl}${route}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${accessToken}`,
            'User-Agent': 'BorisJonhsonApp',
        },
    });
    return request.json();
};
