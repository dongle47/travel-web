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