import { User } from "./user";

export interface LoginParams{
    user_name: string;
    password: string;
}

export interface RegisterParams{
    email: string,
    password: string,
    avatar?: string,
    date_of_birth?: string,
    full_name?: string,
    phone?: string
}

export interface ResponseRegister{
    message: string;
    data: User
}

export interface ResponseLogin{
    data: User
}

export interface ListResponse<T>{
    data: T
}
