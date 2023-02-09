export interface UserToken{
    access_token: string;
    refresh_token: string;
    expired_time: number;
}

export interface User{
    id: string;
    user_name: string;
    email: string;
    password: string;
    user_type: string;
    full_name: string;
    phone: string;
    date_of_birth: string;
    avatar: string;
    token: UserToken;
}