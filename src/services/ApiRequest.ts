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
