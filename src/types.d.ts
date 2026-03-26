export type UserType = {
    id: string;
    name: {
        first: string;
        last: string;
    };
    email: string;
    avatarUrl: string;
}