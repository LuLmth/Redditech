type User = { name: string; profilePicture: string; subscribed: number; karma: number; description: string };

const users: User[] = [
    {
        name: "Lacoste",
        profilePicture:
            "https://media-exp1.licdn.com/dms/image/C4D03AQHgb5adkfuwtA/profile-displayphoto-shrink_800_800/0/1619514060589?e=1640217600&v=beta&t=voujop86CrTSDUF8BHCXw1zW3IBS13MTNQr9WW7mZKs",
        subscribed: 1000,
        karma: 2,
        description: "Aime la vie",
    },
    {
        name: "Lamothe",
        profilePicture:
            "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/244782276_291338412567482_5550132702483798862_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=ErBXVghIjvoAX9tzfzm&edm=ABfd0MgBAAAA&ccb=7-4&oh=16d1c4bad379a8b9afd8a2247aeb0a6e&oe=616BB0D3&_nc_sid=7bff83",
        subscribed: 29801,
        karma: 2,
        description: "J'ai vla les meufs",
    },
    {
        name: "Demurger",
        profilePicture:
            "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/182803654_237322868183576_6868793460994909776_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=cjN1e-Kn1oIAX9fKTNC&tn=KJsLOZQ0xEuKJpY1&edm=ABfd0MgBAAAA&ccb=7-4&oh=27f54f036214ce2cf72c1229d9c286ab&oe=616BB1AA&_nc_sid=7bff83",

        subscribed: 3,
        karma: 2,
        description: "J'ai un gros boule",
    },
    {
        name: "Capelle",
        profilePicture:
            "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s320x320/129700407_2441454886160273_7331409573361725437_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=DT32K8OI3UcAX_7mxv9&edm=ABfd0MgBAAAA&ccb=7-4&oh=47d796dea3ec80c58808b388551205e7&oe=616AC717&_nc_sid=7bff83",

        subscribed: 5,
        karma: 2,
        description: "Papa de 7 enfants",
    },
    {
        name: "TrackMyPlate",
        profilePicture:
            "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/242281097_818292005505277_2310117188288283525_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=WDg0a3HDwsQAX_aI9Nk&edm=ABfd0MgBAAAA&ccb=7-4&oh=77dc2ad84795d215b707e6282b18410f&oe=616B28CB&_nc_sid=7bff83",
        subscribed: 1092773,
        karma: 2,
        description: "Plus grande startup de France",
    },
];

export default users;
