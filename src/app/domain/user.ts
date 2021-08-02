import { Post } from "./post";

export class User {
    uid: string;
    displayName: string;
    email: string;
    photoURL: any;
    provider: any;
    lastLogin: Date;
    createdAt: Date;
    postList: Post[];

    enabled: boolean;
}