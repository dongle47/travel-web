import { User } from "./user";

export interface CreateReviewParams{
    description: string;
    place_id: string;
    rate: number;
    review_img:Array<{
        name: string;
        url: string | undefined
    }>
}

export interface Review{
    id: string;
    place_id: string;
    user_id: string;
    user: User;
    rate: number;
    description: string;
    created_at: string;
}