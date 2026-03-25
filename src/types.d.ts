export type UserType = {
    id: string;
    name: {
        first: string;
        last: string;
    };
    email: string;
    avatarUrl: string;
}

export type CommentWithIdType = {
    id: `${string}-${string}-${string}-${string}-${string}`;
    author: {
        name: string;
        avatarUrl: string;
    };
    content: string;
    timestamp: string;
    likes: number;
}