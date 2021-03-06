export enum bodyFormat {
    none = "none",
    gif = "gif",
    mp4 = "mp4",
    png = "png",
    text = "text",
}

export type Header = { profilePicture: string; username: string; postedBy: string; postedTimed: string; title: string };
export type Body = { uri: string | null; format: bodyFormat, textContent: string | null };;
export type Footer = { like: number; dislike: number; comment: number };

export type Post = { header: Header; body: Body; footer: Footer; id: string };
