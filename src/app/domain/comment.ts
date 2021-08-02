import { Post } from "./post";
import { User } from "./user";

export class Comment {
    id: string;
    text: string;
    date: Date;

    user: any;
    enabled: boolean;
}