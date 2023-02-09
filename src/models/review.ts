import { User } from "./user";

export interface Review{
    id: string;
    place_id: string;
    user_id: string;
    user: User;
    rate: number;
    description: string;
    created_at: string;
}