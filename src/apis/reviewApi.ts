import { axiosClient } from './axiosClient';
import { CreateReviewParams } from './../models/review';
const reviewApi = {
    postReview(params: CreateReviewParams) : Promise<any>{
        const url = '/place-service/review/create'
        return axiosClient.post(url, params)
    },

    getReviews(placeId:string){
        const url = `/review/list/${placeId}`
        return axiosClient.get(url)
    }
}

export default reviewApi