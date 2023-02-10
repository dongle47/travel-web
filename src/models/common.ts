import { User } from "./user";

export interface LoginParams{
    user_name: string;
    password: string;
}

export interface RegisterParams{
    email: string,
    password: string,
    avatar: "",
    date_of_birth: "",
    full_name: "",
    phone: ""
}

export interface ResponseMessage<T>{
    message: string;
    data: T;
}

export interface Response<T>{
    data: T
}
