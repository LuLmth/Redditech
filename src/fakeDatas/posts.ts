import users from "./users";

export type Header = { profilePicture: string; username: string; postedBy: string; postedTimed: string; title: string };
export type Body = string;
export type Footer = { like: number; dislike: number; comment: number };

export type Post = { header: Header; body: Body; footer: Footer, id: string };

const headers: Header[] = [
    {
        profilePicture: users[0].profilePicture,
        username: users[0].name,
        postedBy: users[0].name,
        postedTimed: "19h",
        title: "beautiful landscape",
    },
    {
        profilePicture: users[1].profilePicture,
        username: users[1].name,
        postedBy: users[1].name,
        postedTimed: "3h",
        title: "love this shoes",
    },
    {
        profilePicture: users[2].profilePicture,
        username: users[2].name,
        postedBy: users[2].name,
        postedTimed: "1h",
        title: "qui a de la whey pour moi ?",
    },
    {
        profilePicture: users[3].profilePicture,
        username: users[3].name,
        postedBy: users[3].name,
        postedTimed: "30m",
        title: "Quelle poussette me conseillez-vous #papa",
    },
    {
        profilePicture: users[4].profilePicture,
        username: users[4].name,
        postedBy: users[4].name,
        postedTimed: "1d",
        title: "Trackez pour mieux digérer !",
    },
];

const bodies: Body[] = [
    "https://image.winudf.com/v2/image/Y29tLnNoYWtlX3NlLmxpdmVfd2FsbHBhcGVyLmJlYXV0aWZ1bF9sYW5kc2NhcGVfYW5pbWF0ZWRfd2FsbHBhcGVyX3NjcmVlbnNob3RzXzBfZmJhZmE4M2Y/screen-0.jpg?fakeurl=1&type=.jpg",
    "https://m.media-amazon.com/images/I/710oryCz+YL._AC_UX575_.jpg",
    "https://m.media-amazon.com/images/I/71WfG1znQoL._AC_SS450_.jpg",
    "https://www.mapetitecouvertureperso.fr/1716-large_default/poussette-3en1-mirror-satin.jpg",
    "https://www.boeuf-irlandais.fr/wp-content/uploads/sites/10/2021/07/boeuf-irlandais-organic_beef_farm-mobile.jpg",
];

const footers: Footer[] = [
    {
        like: 100,
        dislike: 0,
        comment: 20,
    },
    {
        like: 9303,
        dislike: 176,
        comment: 88,
    },
    {
        like: 1,
        dislike: 1,
        comment: 0,
    },
    {
        like: 4,
        dislike: 20,
        comment: 450,
    },
    {
        like: 893981,
        dislike: 3920,
        comment: 873,
    },
];

const fakePosts: Post[] = [
    {
        header: headers[0],
        body: bodies[0],
        footer: footers[0],
        id: "0",
    },
    {
        header: headers[1],
        body: bodies[1],
        footer: footers[1],
        id: "1",
    },
    {
        header: headers[2],
        body: bodies[2],
        footer: footers[2],
        id: "2",
    },
    {
        header: headers[3],
        body: bodies[3],
        footer: footers[3],
        id: "3",
    },
    {
        header: headers[4],
        body: bodies[4],
        footer: footers[4],
        id: "4",
    },
];

export default fakePosts;
