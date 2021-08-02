import { Comment } from "./comment";

export class Post {
    id: string;
    title: string;
    text: string;
    image: any;
    date: Date;

    user: any;
    comentList: String[];

    enabled: boolean;
}